const clock = document.querySelector("h2#clock");

// interval : 매번 일어나야하는거

function sayHello() {
  console.log("hello");
}

//setInterval(함수명, 새로고침시간(ms))
setInterval(sayHello, 2000);
