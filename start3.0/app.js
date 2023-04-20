//document.title = "Hello! From JS!"; //JS로 HTML 변경
const title = document.getElementById("title"); //id로 가져오기, 그 이후 아무거나 변경 가능

title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);
