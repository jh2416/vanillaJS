const hello = document.querySelector("h1");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleRightClick: function () {
    hello.innerText = "That was a right click!";
    hello.style.color = colors[0];
  },
  handleMouseEnter: function () {
    hello.innerText = "The mouse is here!";
    hello.style.color = colors[1];
  },
  handleMouseLeave: function () {
    hello.innerText = "The mouse is gone!";
    hello.style.color = colors[2];
  },
  handleWindowResize: function () {
    hello.innerText = "You just resized!";
    hello.style.color = colors[3];
  },
};

hello.addEventListener("auxclick", superEventHandler.handleRightClick);
hello.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
hello.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
