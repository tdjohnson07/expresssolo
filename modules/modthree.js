var randomNum = require('./modone.js');
var money= require('./modtwo.js');
module.exports={
  amount: function(min, max){
    return money(randomNum(min, max))},
  message: 'Account balance: \n'
}
