const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Enterprise = require('../models/enterprise')


module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const exUser = await User.findOne({ where: { email } });
      const exEnterprise = await Enterprise.findOne({ where : { email } });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);
        if (result) {
          done(null, exUser);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else if (exEnterprise) {
        const result = await bcrypt.compare(password, exEnterprise.password);
        if (result) {
          done(null,exEnterprise);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.'});
        }
      } else {
        done(null, false, { message: '가입되지 않은 이메일입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};

// User.findOne({ where: { email } })
// Enterprise.findOne({ where : { email } })
// meodule.exports = () => {
//   passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//   }, async (email, password, done) => {
//     try {
//       const exEnterprise = await Enterprise.findOne({ where: { email } });
//       if (exEnterprise) {
//         const result = await bcrypt.compare(password, exEnterprise.password);
//         if (result) {
//           done(null, exEnterprise);
//         } else {
//           done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
//         }
//       } else {
//         done(null, false, { mssage: '가입되지 않은 기업입니다.' });
//       }
//     } catch (error) {
//       console.error(error);
//       done(error);
//     }
//   }));
// };
