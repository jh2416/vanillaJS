const loginForm = document.getElementById("login-form"); //id를 찾고
const loginInput = loginForm.querySelector("input"); //loginForm에서 바로 찾음
const loginButton = loginForm.querySelector("button");
//첫줄 지우고 2, 3줄 document.querySelector("#login-form input/botton");도 같은 코드
function onLoginBtnClick() {
  console.dir(loginInput.value); //input된 value
  console.log("click!!");
}

loginButton.addEventListener("click", onLoginBtnClick);