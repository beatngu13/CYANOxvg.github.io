(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-4').attr('src', (dpi>1) ? 'images/apple-imac-1010.png' : 'images/apple-imac-505.png');
$('.js-5').attr('src', (dpi>1) ? 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-924.png' : 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-462.png');
$('.js-15').attr('src', (dpi>1) ? 'images/vergelogo-686-3.png' : 'images/vergelogo-343-3.png');}else if($(window).width()>=960){$('.js-4').attr('src', (dpi>1) ? 'images/apple-imac-808-2.png' : 'images/apple-imac-404-2.png');
$('.js-5').attr('src', (dpi>1) ? 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-740-10.png' : 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-370-10.png');
$('.js-15').attr('src', (dpi>1) ? 'images/vergelogo-550-3.png' : 'images/vergelogo-275-3.png');}else if($(window).width()>=768){$('.js-4').attr('src', (dpi>1) ? 'images/apple-imac-648.png' : 'images/apple-imac-324.png');
$('.js-5').attr('src', (dpi>1) ? 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-592.png' : 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-296.png');
$('.js-15').attr('src', (dpi>1) ? 'images/vergelogo-440-3.png' : 'images/vergelogo-220-3.png');}else if($(window).width()>=480){$('.js-4').attr('src', (dpi>1) ? 'images/apple-imac-794.png' : 'images/apple-imac-397.png');
$('.js-5').attr('src', (dpi>1) ? 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-726.png' : 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-363.png');
$('.js-15').attr('src', (dpi>1) ? 'images/vergelogo-598-3.png' : 'images/vergelogo-299-3.png');}else{$('.js-4').attr('src', (dpi>1) ? 'images/apple-imac-528.png' : 'images/apple-imac-264.png');
$('.js-5').attr('src', (dpi>1) ? 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-484.png' : 'images/bildschirmfoto-2017-10-11-um-23.34.39-kopie-242.png');
$('.js-15').attr('src', (dpi>1) ? 'images/vergelogo-400-3.png' : 'images/vergelogo-200-3.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-10')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-11')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-16')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-17')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-18')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-19')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-20')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-21')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-22')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-23')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-24')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-25')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-26')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-27')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});