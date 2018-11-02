/*
var a, b;
a=17;
b=17;
if (a<=b && b > a) 
console.log("Yes");
else
console.log("No");
*/

/*
var a;
a=5;
if ((a<8 && 6==a) || (8<8))
console.log("Yes");
else
console.log("No");
*/

/*
var a, b, c;
a=8;
b=18;
c=50;
if (a>b)
{
var sum = (a+b);
if (sum < c)
console.log("Yes");
else
console.log("No");
}
else
{
var raz = (a-b);
if (raz < c)
console.log("Yes");
else
console.log("No");
}
*/


/*
var a, b, c;
a=10;
b=6;
c=50;
if (a == b)
{
var sum = (a + b);
if (sum < c)
console.log("Yes1");
else
console.log("No1");
}
else
{
var raz = (a - b);
if (raz < c)
console.log("Yes2");
else
console.log("No2");
}
*/

/*
var a, b, c;
a=8;
b=18;
c=50;
if (a > b)
{
var sum = (a+b);
if (sum < c)
console.log("Yes1");
else
console.log("No1");
}
else
{
var raz = (a-b);
if (raz < c)
console.log("Yes2");
else
console.log("No2");
}
else
{
var raz = (a == b);
if (raz < c)
console.log("Yes3");
else
console.log("No3");
}
*/

/*
var o,p,sum;
o=43;
p=63;
for (var r=0; r<=5; r++)
  {
   sum=p+o;
   console.log(r);
   console.log(sum);
   console.log(" ---------------- ");
   console.log("|                |");
   console.log("|                |");   
   console.log("|                |");   
   console.log("|                |");   
   console.log("|                |");
   console.log("|                |");
   console.log("|                |");
   console.log("|                |");
   console.log(" ---------------- ");
   o--; //o=o-1;
   p--; //p=p-1;
  }
*/
/*
var NM=6, FG=3;
switch ((NM+FG)/3){
     case 14:{
      console.log("Четырнадцать");
      break;
          }
     case 17:{
      console.log("Семнадцать");
      break;
            }
      case 2:{
      console.log("два");
      break;
          }
     case 9:{
      console.log("девять");
      break;
            }
     case 11:{
      console.log("одиннадцать");
      break;
            }
     case 3:{
      console.log("три");
      break;
            }
      default:{
      console.log("не знаю");
      break;
                }
      } 
*/

/*
var a="Паша", b="Аня", c="Каша",d="Маша";
switch ("Коля"){
     case "Паша":{
      console.log("Паша");
      break;
          }
     case "Аня":{
      console.log("Аня");
      break;
            }
      case "Каша":{
      console.log("Каша");
      break;
          }
     case "Маша":{
      console.log("Маша");
      break;
            }
      default:{
      console.log("Кто?");
      break;
                }
      } 
*/

/*
var a, b, c;
a=8;
b=18;
c="Каша";
d="Паша"
switch (7){
     case 7:{
     	if (a>b) 
      console.log("Yes");
else
      console.log("No");
      break;
           } 
     case "Паша":{
      for (var i=0; i<10; i++)
      console.log(i);
      break;
                 } 
     default:{
      console.log("Нету");
      break;
             }
}
*/

/*
var o=1;
var sum=1;
while(o<10) {
	o++;
	sum= sum+o;
	console.log(sum);
}
*/



/*
var a = 0;
var sum = 0;
do 
{
a=a+2;
sum = a+sum;
}
while(a<50)
console.log(sum); 



console.log("----凸(¬◡¬)凸----");



var Quadrat = {
color:"Red",
size:"25cm*25cm",
temperature:"-40°",
material:"Iron",
count:"4 objects"
}

for(var key in Quadrat){
        console.log(key);
      }
console.log("----凸(¬◡¬)凸----");
for(var key in Quadrat){
        console.log(Quadrat[key]);
      }
*/

/*
var myFunction = function()

var Lines = function() {
   var a = prompt ('Теория алгоритмов')
   var b = prompt ('Технические средства информатизации')
   var c = prompt ('Операционные системы')
   var lines1 = a + " " + b + " " + c;
   return lines1;
}      

var low_lines = ruProm(),
console.log(low_lines);
*/

/*
var myStrExam = function(Str) {
  //var tmp1 = Str.replace ("y", "Y");
  //return tmp1;

  //var tmp2 = Str.slice (1,3);
  //return tmp2;

  //var tmp3 = Str.substring (1,8);
  //return tmp3;
  
  //var tmp4 = Str.toUpperCase ();
  //return tmp4;

  //var tmp5 = Str.lastIndexOf ("h");
  //return tmp5;

  //var t="t";
  //var tmp20 = Str.split(t);
  //return tmp20
}
var r1 = myStrExam("yet another conference");
console.log(r1);
*/


/*
console.log("------join------");
var a, b;
a = new Array(0,1,2,3,4);
b = a.join("-");
console.log(b);

console.log("------reverse------");
var arr2 = ['a', 'b', 'c'];
arr2.reverse();
console.log(arr2);

console.log("------sort------");
var arr3 = ["Банан", "Апельсин", "Яблоко", "Манго"];
console.log(arr3.sort());

console.log("------concat------");
var arr4 = ['Один', 'Два'];
var arr5 = ['Три', 'Четыре'];
result = arr4.concat(arr5);
console.log(result);

console.log("------slice------");
var arr6 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr6.slice(0, 2))

console.log("------unshift------");
var arr7 = ['a', 'b', 'c'];
arr7.unshift('d', 'e');
console.log(arr7);

console.log("------shift------");
var arr8 = ['a', 'b', 'c', 'd', 'e'];
arr8.shift();
console.log(arr8);

console.log("------toString------");
var user = {
  name: 'Андрей',
  toString: function() {
    return this.name;
  }
};
console.log('Привет ' + user);

console.log("------toLocaleString------");
var data = new Date().toLocaleString();
console.log(data);
*/


$(document).ready(function(){

 $(".menu").click(function(){ 
    $(".podpunkt").slideToggle(1000);
  });

  $(".reg").click(function(){ 
    $(".register").slideToggle(1000);
  });

  $(".sign").click(function(){ 
    $(".sign-obc").slideToggle(1000);
  });

  $(".car1-obc").click(function(){
   $(".car1-obc-xar").slideToggle(1000);
  $(".car1-obc-info").css("height","717");
  }); 


  $(".car2-obc").click(function(){ 
   $(".car2-obc-xar").slideToggle(1000);
  $(".car2-obc-info").css("height","717");
  });
});


/* 
$(".menu").click(function(){ 
  //$(".menu").remove();
  //$("div").removeClass("Job");
  //alert($(".podpunkt").text());
  //$(".menu").after($(".menu").clone());
  //$("<h3>jQuery</h3>").replaceAll(".menu");
   });
   
});
*/ 


/*
var ring = {};
ring.radius = "5 cm";
ring.bcolor = "Bronze";
ring.circle = function(){
 var i =2 * π  * R;
  var π = 3.14;
  var R = 5;
  return i =2 * π * R;
} 
console.log(ring.circle());
console.log(ring.radius);
console.log(ring.bcolor);
*/

/*
var Quadrate = {
    "Length":"25 m",
    "Width":"30 m",
    "Height":"45 m"
}
*/

/*var D1 = document.getElementsByClassName("Job");
var D2 = document.getElementById("Job");
console.log(D1);
console.log(D2);*/
/*
$(document).ready(function(){
  $('.Slider').bxSlider({
    auto: true,
    autoControls: true,
   // autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
});*/





/*
var marker_once = false; // маркер для однократного выполнения функции вывода out_data()
var marker_valid_input = false; //для отслеживания валидации полей
var marker_valid_age = false; //для отслеживания валидации полей
var br="<br>"; // для форматирования вывода

function prepare_xml() { // функция отправки и приема данных (ajax)
   var formData = new FormData(document.forms.name_form);
   console.dir(formData); // что там отправляем то?
   var xhr = new XMLHttpRequest(); //создаем объект
   xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) { //проверяем ответ на ошибки 
              // если норм то выводим
                document.getElementById("result_output").innerHTML = this.responseText;
            }
            else
            {
              // если нет сообщаем об ошибке
              document.getElementById("result_output").innerHTML = "Error";
            } 
        };
     xhr.open("POST", "/controller.php"); // post запрос на конкретный контроллер
     xhr.send(formData); //отпраляем данные

}

function prepare_websocket() { // функция отправки и приема данных (websocket)

  var ws = new WebSocket("ws://localhost:8081"); //оздаем объект
  ws.onopen = function() { //открываем соединение
    
    document.getElementById("result_websocket_connect").innerHTML = "Connection opened...";
//формируем данные для передачи
      var ws_last_name = document.forms.name_form.last_name.value;
      var ws_first_name = document.forms.name_form.first_name.value;
      var ws_patronymic = document.forms.name_form.patronymic.value;
      var ws_age = document.forms.name_form.age.value;
      ws.send(ws_first_name);
      var result_msg = ws_last_name+br+ws_first_name+br+ws_patronymic+br+ws_age; 
      ws.send(result_msg); // передаем
    
  };

    ws.onmessage = function(event) { // получаем данные и выводим
    var incomingMessage = event.data;
    document.getElementById("result_websocket").innerHTML = incomingMessage;
 };
}

function out_data() { // отображение отправляемых данных
     var h3 =  document.createElement('h3');
     h3.innerHTML = "Before sending to the server";   
       var add_h3 = document.getElementById("result_input");
       add_h3.appendChild(h3);

       var last_name = document.forms["name_form"]["last_name"].value;
       var first_name = document.forms["name_form"]["first_name"].value;
       var patronymic = document.forms["name_form"]["patronymic"].value;
       
       var result = last_name+br+first_name+br+patronymic;

       var p = document.createElement('p');
       p.innerHTML = result;
       var div = document.getElementById("result_input");
       div.appendChild(p);

       
     var age = document.forms["name_form"]["age"].value;
     var p4 = document.createElement('p');
       p4.innerHTML = age;
       p.parentNode.insertBefore(p4, p.nextSibling);

     return marker_once =true; // марке для однократного вывода данных     
} 
 


function transport_to_server() {
  
  if(!marker_once&&marker_valid_age&&marker_valid_input) {
        out_data();
          }
// для работы через веб сокет нужно расскоментровать функцию prepare_websocket() 
// и закомментировать prepare_xml()

      prepare_xml();
      // prepare_websocket(); 
    }


function valid_input(txt) //валидация полей ввода
    {
          if ((txt.value.length<15)&&(/[a-zA-Zа-яА-Я]/.test(txt.value))){
              
          document.getElementById("error").innerHTML = "";
          document.getElementById(txt.name).setAttribute('Class', "ok");
          return marker_valid_input = true;
        }
         else 
        {
          document.getElementById("error").innerHTML = "Поля должны содержать символы и не более 15";
          document.getElementById(txt.name).setAttribute('Class', "error");
          return marker_valid_input = false;       
        }
      
        }

function valid_age(num) //валидация поля ввода возраст
    {
          
        if(/[0-9]{2}$/.test(num.value))
         {
            if ((num.value>=18)&&(num.value<=50)){
                
            document.getElementById("error_age").innerHTML = "";
            document.getElementById(num.name).setAttribute('Class', "ok");
            return marker_valid_age = true;
          }
           else 
          {
            document.getElementById("error_age").innerHTML = "Возраст должен быть от 18 до 50 лет";
            document.getElementById(num.name).setAttribute('Class', "error");
            return marker_valid_age = false;
          }
        }
        else
        {
          document.getElementById("error_age").innerHTML = "Поле возраста предполагает число";
          document.getElementById(num.name).setAttribute('Class', "error");
          return marker_valid_age = false;
           
        }
    }

function transport_from_server() { // функция обновления данных через веб сокет
   var ws5 = new WebSocket("ws://localhost:8085");
  ws5.onopen = function() { 
    var request_msg = true;
      ws5.send(request_msg);
    
  };

    ws5.onmessage = function(event) {
    var incomingMessage = event.data;
    document.getElementById("out_balance").innerHTML = incomingMessage;
};
}

function ajax_transport_from_server() // функция обновления данных через ajax
 {
   var request = new XMLHttpRequest();
   request.open("GET", "/ajax_controller.php");
   request.onreadystatechange = function() 
      {
            if (this.readyState == 4 && this.status == 200) 
            {
                document.getElementById("ajax_out_balance").innerHTML = this.responseText;
            }
            else
            {
              document.getElementById("ajax_out_balance").innerHTML = "Error"
              +br
              +"Status:"
              +this.readyState
              +br
              +"Type:"
              +this.status;
            } 
        };
     request.send(null);

}
*/

/* // Если что, удалить
function melp () {
  var Email = document.forms["Sign"]["Email"].value;
  console.log(Email);
  var parol = document.forms["Sign"]["parol"].value;
  console.log(parol);
}
*/ // Если что, удалить

function Keep1() {
console.log("Одинарный щелчок");
}

function Keep2() {
console.log("Двойной щелчок");
}

function Keep3() {
console.log("Щелчок правой кнопкой мыши на элементе");
}

function Keep4() {
console.log("Начало выделения контента");
}

function Keep5() {
console.log("Нажата кнопка мыши в пределах текущего элемента");
}

function Keep6() {
console.log("Перемещение курсора мыши в пределах текущего элемента");
}

function Keep7() {
console.log("Курсор мыши выведен за пределы текущего элемента");
}

function Keep8() {
console.log("Курсор мыши наведен на текущий элемент");
}

function Keep9() {
console.log("Отпущена кнопка мыши в пределах текущего элемента");
}

function Keep10() {
console.log("Нажата кнопка мыши в пределах текущего элемента");
}

function Keep11() {
console.log("Нажата клавиша на клавиатуре");
}

function Keep12() {
console.log("Нажата и отпущена клавиша на клавиатуре");
}

function Keep13() {
console.log("Отпущена клавиша на клавиатуре");
}

