$(document).ready(function(){var windowWidth=$(window).width();var windowHeight=$(window).height();if($('.scrollto').length){$('.scrollto').click(function(){$.scrollTo($(this).attr("href"),{duration:1000,easing:'swing'});return false;})}if($('.scrolltoslow').length){$('.scrolltoslow').click(function(){$.scrollTo($(this).attr("href"),{duration:2000});return false;})}var waypoint1=new Waypoint({element:$('.left-column h1'),handler:function(direction){console.log('Scrolled to waypoint!')
$('a.down').fadeIn();},})
var waypoint2=new Waypoint({element:$('.left-column h2'),handler:function(direction){console.log('Scrolled to waypoint!')
$('a.down').fadeOut();},})
var waypoint3=new Waypoint({element:$('#start'),handler:function(direction){console.log('Scrolled to start waypoint!')
$('.site-action').fadeIn();$('ul.nav > li').removeClass('active');$('.nav-links a[href="#start"]').parent().addClass('active');},offset:'-100px'})
var waypoint4=new Waypoint({element:$('#communication'),handler:function(direction){console.log('Scrolled to communication waypoint!')
$('ul.nav > li').removeClass('active');$('.nav-links a[href="#communication"]').parent().addClass('active');},offset:'300px'})});