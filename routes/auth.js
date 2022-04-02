const express = require('express');
const sequelize = require('sequelize');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');
const Enterprise = require('../models/enterprise');
// const { ENUM } = require('sequelize/types');

const router = express.Router();


router.post('/userEnter', isNotLoggedIn, async (req, res, next) => {
  try {
    if (req.params == '/join') {
      return res.redirect('/join');
    }
    return res.redirect('/joinE');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.post('/joinE', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const eexUser = await Enterprise.findOne({ where: { email } });
    if (eexUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12);
    await Enterprise.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/loginE', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, enterprise, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!enterprise) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(enterprise, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});

module.exports = router;