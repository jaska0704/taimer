let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

function wait(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}

function redLight() {
  red.classList.add("on");
  yellow.classList.remove("on");
  green.classList.remove("on");
}
function yellowLight() {
  red.classList.remove("on");
  yellow.classList.add("on");
  green.classList.remove("on");
}
function greenLight() {
  red.classList.remove("on");
  yellow.classList.remove("on");
  green.classList.add("on");
}

async function sr() {
  redLight();
  await wait(3000);
  yellowLight();
  await wait(1000);
  greenLight();
  await wait(3000);
  yellowLight();
}

sr();
setInterval(sr, 8_000);
