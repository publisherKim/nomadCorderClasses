// dom object ...
const title = document.getElementById('title');
title.innerHTML = "HI From JS";
title.style.color = "red";
document.title="melong";

// querySelector
const title2 = document.querySelector('#title2');
title2.innerHTML = "HI From JS2";
title2.style.color = "blue";

const handleResize = (event) => {
  console.log(event);
  'I have been resized'
};

// Events and event handlers
window.addEventListener("resize", handleResize);

const handleClick = () => {
  title.style.color = "oragne"; 
}

title.addEventListener("click", handleClick);

// conditional state
if (10 > 5) {
  console.log("hi");
} else {
  console.log("ho");
}

// change color
const BASE_COLOR = "#34495e";
const OTHER_COLOR = '#7f8c8d';
const initColor = () => title.style.color = 'red';
const changeColor = (color) => title.style.color = color;