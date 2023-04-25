const loginForm = document.getElementById("login-form"); //id를 찾고
const loginInput = loginForm.querySelector("input"); //loginForm에서 바로 찾음
const loginButton = loginForm.querySelector("button");
//첫줄 지우고 2, 3줄 document.querySelector("#login-form input/botton");도 같은 코드
function onLoginBtnClick() {
  /*console.dir(loginInput.value); //input된 value
  console.log("click!!");*/
  const username = loginInput.value;
  console.log(username);
  /* html 파일 <form>부분, 유효성을 확인하는 연습은 중요 
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    //.length로 string의 길이 구할 수 있음
    alert("Your name is too long.");
  }*/
}

loginButton.addEventListener("click", onLoginBtnClick);
