alert("hi");

// console에서 작성
/*2 + 2; //integer
1.2 + 6545; //float
("hello"); //string
"hello" + "my name is hoon";*/

console.log(545454); //콘솔에 메시지 보내기(콘솔에서 출력)
console.log("lalalalal");

const a = 5; //상수;바뀌지 않는 값
const b = 2;

const myName = "hoon";
const veryLongVariableName = 0; //camelcase

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

//function
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I am " + age);
}

sayHello("John", 15);
sayHello("Nico", 27);
sayHello("Matt", 31);
sayHello("Hoon", 43);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

plus(8, 50);
