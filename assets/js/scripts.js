$(document).ready(function(){


    $(window).scroll(function(){
        if($(this).scrollTop() > 150){
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });
});

      $(".menu-nav li").on("click", function(e){
          e.preventDefault();
          var tg = $(e.target).attr("data-id");
          var t = "#" + tg;
          var ofs = $(t).offset().top;
          $("html, body").animate({scrollTop: ofs - 70},500)
      })

  });