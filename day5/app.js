import "style.css"; //codesandbox에서는 적용이 됐는데 여기서는  안된다. 차이가 있다면 package.json파일의 유무 차이인데 알아봐야 할 것 같다.

const title = document.querySelector("body");

const BIG = "big";
const MEDIUM = "medium";
const SMALL = "small";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    title.classList.add(BIG);
    title.classList.remove(MEDIUM);
  } else if (width <= 1000 && width >= 700) {
    title.classList.add(MEDIUM);
    title.classList.remove(BIG, SMALL);
  } else {
    title.classList.remove(MEDIUM);
    title.classList.add(SMALL);
  }
}

window.addEventListener("resize", handleResize);
