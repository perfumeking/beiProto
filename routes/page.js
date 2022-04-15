const express = require('express');
const { Post, User } = require('../models')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req,res,next) => {
res.locals.user=null;
res.locals.enterprise=null;
res.locals.post=null;
next();
});

router.get('/userProfile', (res,req) => {
    res.render('userProfile',{ title : '회원 정보 - BEI'});
});

router.get('/enterpriseProfile', (res,req) => {
    res.render('enterpriseProfile',{ title : '기업 정보 - BEI'});
});

router.get('/login', isNotLoggedIn, (req, res) => {
    res.render('login', { title: '회원 로그인 유형 - BEI' });
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', { title: '회원 가입 유형 - BEI' });
});

router.get('/userJoin', isNotLoggedIn, (req, res) => {
    res.render('userJoin', { title: '회원가입 - BEI' });
});

router.get('/userLogin', isNotLoggedIn, (req, res) => {
    res.render('userLogin', { title: '회원가입 - BEI' });
});

router.get('/enterpriseLogin', isNotLoggedIn, (req, res) => {
    res.render('enterpriseLogin', { title: '기업로그인 - BEI' });
});
  
router.get('/enterpriseJoin', isNotLoggedIn, (req, res) => {
    res.render('enterpriseJoin', { title: '기업회원가입 - BEI' });
});

router.get('/feed', isNotLoggedIn, (req, res) => {
    res.render('feed', { title: '피드 - BEI' });
});

router.get('/upload', isLoggedIn, (req,res) => {
   res.render('upload', { title: '업로드 - BEI'}) 
});


  
  
router.get('/', (req, res, next) => {
    const twits = [];
    res.render('main', {
      title: 'BEI',
      twits,
      user : req.user,
    });
});
  
module.exports = router;
