//Dom -- Document Object Model
//DOM Manipulation
//Getting elements

//getting elements
// let btn = document.getElementById("btn"); //-- id buyicha
// let btns = document.getElementsByClassName("maxsus");//classi buyicha
// let elements = document.getElementsByTagName("body");//teglar nomi buyicha
// let elements = document.getElementsByName("street");//name qatnashgan inputlar uchun nomi buyicha
// let elements = document.querySelector(".maxsus");//yangi usul, barchasidan birdek foydalansa bo'ladi
// let elements = document.querySelectorAll("body");//barchasiga birdek ta'sir qiladi

// //changing styles
// btn.style.backgroundColor = "black";
// btn.style.color = "red"

// window.onload = function() {
//     window.setInterval(function() {
//         let date = new Date();

//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();

//         let clock = hours + ":" + minutes + ":" + seconds;
//         document.querySelector("#clock").innerHTML = clock;
//     });
// }

let minut = document.querySelector(".minut");
let sekund = document.querySelector(".secund");
let oraliq = document.querySelector(".oraliq");
let sekundcha = document.querySelector(".secundcha");

let count = 0;
let count1 = 0;
let count2 = 0;

let sek2 = setInterval(() => {
  ++count2;
  if (count2 === 10) {
    count2 = 0;
  }
  sekundcha.innerHTML = count2 < 10 ? "0" + count2 : count2;
}, 100);
let sek = setInterval(() => {
  ++count;
  if (count === 60) {
    count = 0;
  }
  sekund.innerHTML = count < 10 ? "0" + count : count;
}, 1000);
let min = setInterval(() => {
  ++count1;
  if (count1 === 60) {
    count1 = 0;
  }
  minut.innerHTML = count1 < 10 ? "0" + count1 : count1;
}, 60000);
