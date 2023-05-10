// var hiddenBox = $( ".hello" );
// $( ".html" ).on( "click", function( event ) {
//   hiddenBox.show();
// });

//CSS
$(document).ready(function(){
  $(".css").click(function(){
    $(".text").toggleClass("blue");
   //$(".hello").toggleClass("blue");
  });
});

//HTML
// $(document).ready(function(){
//   $(".html").click(function(){
//     $(".hello").toggle();
//     $(".lorem").toggle();
//   });
// });
$(document).ready(function(){
    $(".html").click(function(){
        //$("p.p1").html("Hello World !");
        $("p.p1").toggle();
        $("p.p2").toggle();
        $(".hello").toggle();
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