const loginForm = document.getElementById("login-form"); //id를 찾고
const loginInput = loginForm.querySelector("input"); //loginForm에서 바로 찾음
const loginButton = loginForm.querySelector("button");
//첫줄 지우고 2, 3줄 document.querySelector("#login-form input/botton");도 같은 코드

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden"); //한번 입력하면 form 안보임
  const username = loginInput.value;

  //login 정보 기억하기 - local storage API
  /* console창 입력
  localStorage.setItem("username", "nico")
  localStorage.getItem("username")
  localStorage.removeItem("username")
  */
  localStorage.setItem("username", username);

  greeting.innerText = "Hello " + username; //form은 숨겨지고 h1에 내용은 들어가지만 보이지 않음
  //greeting.innerText = `Hello ${username}`; //위랑 같은 동작  ``작은따옴표 아님! string이랑 변수를 합쳐줌
  //규칙1. 변수를 string안에 넣고싶다면 ${변수명}
  //규칙2. `(백틱 기호)로 시작해야함!
  greeting.classList.remove(HIDDEN_CLASSNAME); //h1나타남
}
/*
function handleLinkClick(event) {
  event.preventDefault(); //이러면 alert이후에 다른페이지로 이동 안함
  console.log(event);
  alert("clicked!");
}
*/
//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
//브라우저는 엔터를 누를때 새로고침을 하고 form을 submit하도록 프로그래밍 되어있음-event추가 부분으로 확인

//link.addEventListener("click", handleLinkClick); //alert창이 기본동작을 막음
