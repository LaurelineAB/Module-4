// var hiddenBox = $( ".hello" );
// $( ".html" ).on( "click", function( event ) {
//   hiddenBox.show();
// });

$(document).ready(function(){
  $(".text").css("color","green");
})

//CSS
$(document).ready(function(){
  $(".css").click(function(){
    $(".text").css("color","blue");
    // $(".text").toggleClass("blue");
  });
});


//HTML
$(document).ready(function(){
    $(".html").click(function(){
        $("p.p1").html("Hello World !");
        // $("p.p1").toggle();
        $("p.p2").hide();
        // $(".hello").toggle();
    })
})


//Toggle
$(document).ready(function(){
  $(".toggle").click(function(){
    $(".text").toggle();
  });
});


//Slide
$(document).ready(function(){
  $(".slide").click(function(){
    $(".text").slideToggle("slow");
  });
});