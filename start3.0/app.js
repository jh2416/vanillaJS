//document.title = "Hello! From JS!"; //JS로 HTML 변경
/*const title = document.getElementById("title"); //id로 가져오기, 그 이후 해당항목 변경 가능

title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);*/

/*const hellos = document.getElementsByClassName("hello"); //class로 가져오기, 여러개 가능

console.log(hellos);*/

const title = document.getElementsByTagName("h1"); //anchor, div, section, button...

console.log(title);

const cool = document.querySelector(".hello h1:first-child");
// const cool = document.querySelector("div h1");
//element를 CSS방식으로 검색가능
//여러개인 경우 first element만 가져옴, 모두 가져오려면 querySelectorAll
//const cool = document.querySelector("#hello"); == const cool = document.getElementById("hello");

function handleTitleClick() {
  console.log("title was clicked!");
  cool.style.color = "blue";
}

cool.innerText = "hello";

console.log(cool);

//cool.style.color = "blue"; //change color

cool.addEventListener("click", handleTitleClick); //cool을 click하는 것을 listen
