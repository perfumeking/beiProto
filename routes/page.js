const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req,res,next) => {
res.locals.user=null;
res.locals.enterprise=null;
res.locals.post=null;
next();
});

router.get('/profile', (res,req) => {
    res.render('profile',{ title : '회원 정보 - BEI'});
});

router.get('/profileE', (res,req) => {
    res.render('profileE',{ title : '기업 정보 - BEI'});
});

router.get('/userEnter', isNotLoggedIn, (req, res) => {
    res.render('userEnter', { title: '회원 유형 - BEI' });
});

router.get('/login', isNotLoggedIn, (req, res) => {
    res.render('login', { title: '로그인 - BEI' });
});

router.get('/loginE', isNotLoggedIn, (req, res) => {
    res.render('userEnter', { title: '기업로그인 - BEI' });
});
  
router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', { title: '회원가입 - BEI' });
});
  
router.get('/joinE', isNotLoggedIn, (req, res) => {
    res.render('joinE', { title: '기업회원가입 - BEI' });
});

router.get('/feed', isNotLoggedIn, (req, res) => {
    res.render('feed', { title: '피드 - BEI' });
});


  
  
router.get('/', (req, res, next) => {
    const twits = [];
    res.render('main', {
      title: 'BEI',
      twits,
    });
});
  
module.exports = router;
