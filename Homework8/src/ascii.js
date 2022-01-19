const animationElement = document.getElementById("animation");
const viewer = document.getElementById("viewer");
const sizeElement = document.getElementById("size");
const turboElement = document.getElementById("turbo");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
var count = -1;
var interval = 250;
var intervalId;
var textcontext;

console.log(start);

stop.disabled = true;
start.disabled = true;
turboElement.disabled = true;

function startInterval(_interval) {
  intervalId = setInterval(function () {
    animate();
  }, _interval);
}

start.addEventListener("click", (event) => {
  animationElement.disabled = true;
    if (animationElement.value !== "") {
    viewer.textContent = animationElement.value;
    start.disabled = true;
    stop.disabled = false;
    turboElement.disabled = false;
    clearInterval(intervalId);
    startInterval(interval);
  }
});

stop.addEventListener("click", (event) => {
  animationElement.disabled = false;
  stop.disabled = true;
  turboElement.disabled = true;
  start.disabled = false;
  clearInterval(intervalId);
  event.stopPropagation();
});

animationElement.addEventListener("change", (event) => {
  if (event.target.value == "Blank") {
    viewer.textContent = "";
    start.disabled=true;
  } else {
    start.disabled = false;
    textcontext = animationElement.value;
  }
});

sizeElement.addEventListener("change", (event) => {
  viewer.style.fontSize = event.target.value;
});

function animate() {

    count++;
    let animation = ANIMATIONS[animationElement.value].split("=====");
    if(count >= animation.length) {
        count = 0;
    }
    viewer.textContent = animation[count]
}

turboElement.addEventListener("change", (event) => {
  if (turboElement.checked) {
    interval = 50;
  } else {
    interval = 250;
  }
  clearInterval(intervalId);
  startInterval(interval);
});
