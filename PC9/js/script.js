/*
var o=1;
    s=1;
while (o<10) {
	console.log(o);
    o++;
    s=s+o;
    console.log(s);
}

*/
/*
var s=0
var sum=0
do{
s=s+2;
sum=sum+s;
}
while (s<50);
console.log(sum)

 var kostya = {
 	mas:"110kg",
 	height:"181sm",
 	year:"blue",
 	gigant:"true",
    true:"false"
 }
console.log("-_-_-_-_-_-_-_-_-_-")
 for (var key in kostya) {
 	console.log(key);
 }
console.log("-_-_-_-_-_-_-_-_-_-")
for (var key in kostya) {
 	console.log(kostya[key]);
 }
console.log("-_-_-_-_-_-_-_-_-_-")  
*/
/*
var we = function() {
	var wq=prompt ('Имя')
	var ww=prompt ('Фамилия')
	var wr=prompt ('Отчество')
	console.log(wq)
	alert(wq+" "+" "+ww+" "+wr)
	return we;
}
var t1=we();
console.log(t1);
*/
/*
var wt = function() {
	var wu=prompt ('Имя')
	var wy=prompt ('Фамилия')
	if (wu===wy)
    console.log("одинаковые");
    else
    console.log("разные");
}
var t1=wt();
console.log(wt);

var text1=function(str)
{
var split="-";
var tt1 =str.split(split);
return tt1;
}
var t1=text1 ("primer text");
console.log(t1);

var ma=[1,2,3];
ma.join();
ma.join("");
ma.join("  ")
var mas=new Array(10);
mas = [0,0,0,0,0,0];
mas.join('-')
console.log(ma);
console.log(mas);




var dota = {};
 dota.heroes ="116";
 dota.items  ="100";
 dota.skill  ="low";
 dota.map =function (heroes,items) {
  console.log("что угодно");
 }
*/
$(document).ready(function(){
   $(".starti").click(function(){
   $(".startl").animate({left:"-1000px"},2000);
   $(".startr").animate({right:"-1125px"},2000);
   $(".startr").hide(1);
   });
});
var n=0;
$(document).ready(function(){
   $(".bl").click(function(){
      $(".bl").html(n++);
      $(".bl").click(function(){
      $(".bl").addClass("bl1");
    });
      $(".bl1").click(function(){
      $(".bl1").addClass("bl2");
    });
      $(".bl2").click(function(){
      $(".bl2").addClass("bl3");
    });
      $(".bl2").click(function(){
      $(".bl3").addClass("bl");
    });
      $(".bl3").click(function(){
      $(".bl3").removeClass("bl3 bl2 bl1");
    });
   });
});
/*
var dota = document.getElementById('bl');
console.log(dota);
console.log('///////////////////');
var map = document.getElementsByTagName('div');
console.log(map);
console.log('///////////////////');
*/
$(document).ready(function(){
      $('.sli').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
});
    });


function examfuc(event) {
	event.preventDefault();
	var exam =document.forms.name1.username.value;
	var examm =document.forms.name1.password.value;
	console.log(exam);
	console.log(examm);
}
$(document).ready(function(){
	$(".blo1").click(function(){
	$(".blo1").addClass("blo2"); 
});
});
$(document).ready(function(){
	$(".blo2").dblclick(function(){
	$(".blo2").addClass("blo3"); 
});
});