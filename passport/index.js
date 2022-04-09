const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');
const Enterprise = require('../models/enterprise');

if (User) {
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
  kakao();
};
} else {
module.exports = () => {
  passport.serializeUser((enterprise, done) => {
    done(null, enterprise.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then(enterprise => done(null, enterprise))
      .catch(err => done(err));
  });

  local();
  kakao();
};
}
