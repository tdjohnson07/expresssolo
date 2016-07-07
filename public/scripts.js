$(document).ready(function(){
  var min=100;
  var max=1000000;
  $('#minMax').on("submit", function(event){
    event.preventDefault();
    min=$("#min").val();
    max=$("#max").val();
  });
  $('button').on('click', function(){
    $.get('/balance?min='+min+"&max="+max).then(function(response){
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
