var express=require('express');
var app=express();
var bankAccount=require('./modules/modthree.js');
var port=3000;
var min=100;
var max=1000000;
app.listen(port, function(request, response){
  console.log("we're on");
});
app.use(express.static('public'));
app.get('/', function(request, response){
  console.log(__dirname);
  response.sendfile(__dirname+'/public/index.html');
});
app.get('/balance', function(request, response){
  min= Number(request.query.min);
  max=Number(request.query.max);
  response.send({
    money: bankAccount.amount(min, max),
    message : bankAccount.message
  });
});
