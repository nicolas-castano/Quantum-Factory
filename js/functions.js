
$(document).ready(function () {
  //SUAVIDAD AL BAJAR CON SCROLL AL CLIQUEAR LINK
  $("a.smooth").on("click", function(){
    var $link = $(this);
    var anchor  = $link.attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 800);
  })

  //ABRE EL NAV LATERAL EN MOBILE VIEW
  $(".button-collapse").sideNav();

  //CERRAR EL NAV LATERAL AL APRETAR LINK (TERMINAR)
  // $(".close").on("click", function(){
  //   $(".side-nav").remove();
  //   $("#sidenav-overlay").remove();
  // })

  //ANIMACION DE TEXTO TITULO FUENTE: http://codepen.io/ajayadav09/pen/KpdBwE?editors=001

  wss_slide();
})

var wss_i = 0;
var wss_array = ["moderno", "simple", "para vos"];

function wss_next() {
    wss_i++;
    document.getElementById("txt-animate").style.opacity = 0;
    if (wss_i > (wss_array.length - 1)) {
        wss_i = 0;
    }
    setTimeout('wss_slide()', 800);
}


function wss_slide() {
    document.getElementById("txt-animate").innerHTML = wss_array[wss_i];
    document.getElementById("txt-animate").style.opacity = 1;
    setTimeout('wss_next()', 3000);
}

//INICIALIZACION DE SLIDERS
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
