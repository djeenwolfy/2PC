
$("q1").css("fontSize","33px");
$("q2").css("fontSize","28px");
console.log('sdfgsdg');




$(document).ready(function(){
  
   $("#knopka1").click(function(){
      $("div").removeAttr("id");
      $("#knopka1").css("display","none");
   });

});


$(document).ready(function(){
  
   $("#but1").click(function(){
      $("#but1").remove()
      $("h1").remove();
   });
   $("#but2").click(function(){
      $("#but2").remove();
      $("p").remove();
   });
   $("#but3").click(function(){
      $("#but3").remove()
      $("p").remove();
   });

}); 


$(document).ready(function(){
  
   $("#knopka3").click(function(){
      $("h149").replaceWith("<h149>Ваня</h149>");
      $("#knopka3").css("display","none");
   });

});     
 $(document).ready(function(){
      $('.bxslider').bxSlider();
    });




  
  $('.bxSlider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 750,
  
});




$('.q123').dblclick(function(){
  alert('ВЫ ПОКУШАЛИ АЛИВЬЕ');
});

$('.q123').dblclick(function(){
  alert('ВЫ ПОКУШАЛИ АЛИВЬЕ');
});

   function textMsg(msg) {
    document.getElementById('text').innerHTML = msg;
    document.getElementById('msg').style.display = 'block';
   }
   function closeMsg() {
    document.getElementById('msg').style.display = 'none';
   }