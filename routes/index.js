var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  if (req.url == '/')
    res.sendFile(__base + 'public/html/main.html');
  else{
    res.redirect('users' + req.url);
  }
  
});

module.exports = router;
