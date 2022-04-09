const express = require('express');
const sequelize = require('sequelize');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');
const Enterprise = require('../models/enterprise');

const router = express.Router();

router.post('/login', isNotLoggedIn, async (req, res, next) => {
  try {
    if (req.params == '/userLogin') {
      return res.redirect('/userLogin');
    }
    return res.redirect('/enterpriseLogin');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  try {
    if (req.params == '/userJoin') {
      return res.redirect('/userJoin');
    }
    return res.redirect('/enterpriseJoin');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/userJoin', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password, name, birthday, phoneNumber } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/userJoin?error=exist');
    }
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      email,
      nick,
      password: hash,
      name,
      birthday,
      phoneNumber
    });
    return res.redirect('/userLogin');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/userLogin', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?userLoginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); 
});

router.post('/enterpriseJoin', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const eexUser = await Enterprise.findOne({ where: { email } });
    if (eexUser) {
      return res.redirect('/enterpriseJoin?error=exist');
    }
    const hash = await bcrypt.hash(password, 12);
    await Enterprise.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/enterpriseLogin');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/enterpriseLogin', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, enterprise, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!enterprise) {
      return res.redirect(`/?enterpriseLoginError=${info.message}`);
    }
    return req.login(enterprise, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next);
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