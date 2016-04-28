var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  /// http://localhost:3000/users/?id=similer
  
  var key = '5d6592e7-834f-49c2-bb11-4135a8626d7a';
  
  var id = req.query.id;
  if (id == undefined){
    res.send("Id 제대로 입력하셈");
    return;
  }
  
  var prefix = 'https://kr.api.pvp.net/api/lol/';
  var region = 'kr';
  var version = '/v1.4';
  var api = '/summoner/by-name/'
  var key = "?api_key=" + "";
  
  var hello = "te"; 
  
  request(prefix + region + version + api + id + key, function(err, response, body){
    if (!err && response.statusCode == 200){
      var dd = JSON.parse(body);
      var user = dd.similer;
      
      res.send(body[id][summonerLevel]);    
    }
  });
   
    
  
  
  
});

module.exports = router;
