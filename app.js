$(document).ready(function() {
  // all code goes in here

  var box = $('.box');
  var allColours = 'white green red blue yellow'
  var colour = 'white';

  box.on('click', function() {
      $(this).addClass(colour)
    });

  box.on('dblclick', function () {
    $(this).removeClass(allColours);
  });

  $('#reset').on('click', function() {
    box.removeClass(allColours)
  });

  $('#red').on('click', function(){
    colour = 'red';
  });

  $('#blue').on('click', function(){
    colour = 'blue';
  });

  $('#green').on('click', function(){
    colour = 'green';
  });

  $('#yellow').on('click', function(){
    colour = 'yellow';
  });

  $('#white').on('click', function(){
    colour = 'white';
  });








  })
