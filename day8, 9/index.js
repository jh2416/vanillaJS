const randomNumberGameForm = document.querySelector("#randomNumberGame");

const numberRange = document.querySelector("#numberRange");
const numberGuess = document.querySelector("#numberGuess");
const compare = document.querySelector(".compared");
const answer = document.querySelector(".answered");

function randomNumberGame(event) {
  event.preventDefault();
  const ranNum = Math.ceil(Math.random() * numberRange.value);
  compare.innerHTML = `You chose: ${numberGuess.value}, the machine chose ${ranNum}`;

  if (numberGuess.value == ranNum) {
    answer.innerHTML = "You Win!";
  } else {
    answer.innerHTML = "You lost!";
  }
}

randomNumberGameForm.addEventListener("submit", randomNumberGame);
