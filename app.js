const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const {sequelize} = require('./models');
const passportConfig = require('./passport');
const { default: helmet } = require('helmet');

const app = express();
passportConfig();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
app.enable('trust proxy');
nunjucks.configure('views', {
  express: app,
  watch: true,
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

if (process.env.NODE_ENV === 'production'){
  app.enable('trust proxy');
  app.use(morgan('conbined'));
  app.use(helmet({contentSecurityPolicy:false}));
  app.use(hpp());
  } else {
   app.use(morgan('dev'));
   }
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  };
if (process.env.NODE_ENV === 'production'){
    sessionOption.proxy = true;
}
app.use(session(sessionOption));


app.use(passport.initialize());
app.use(passport.session());

app.use('/', pageRouter);
app.use('/auth',authRouter);

app.use((req, res, next) => {
  const error =  new Error(`no router : ${req.method} ${req.url} `);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log('waiting at port number :', app.get('port'));
});
