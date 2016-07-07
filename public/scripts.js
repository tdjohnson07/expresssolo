$(document).ready(function(){
  $('button').on('click', function(){
    $.get('/balance').then(function(response){
      console.log(response);
      $('ul').replaceWith('<ul></ul>');
      $('ul').append('<li>'+response.message+'</li>');
      $('ul').append('<li>'+response.money+'</li>');
      $('ul').fadeIn(2000);
      $('ul').delay(2000).fadeOut();
    }).catch(function(){
      console.log("fail in getting /balance");
    });
  });

});
