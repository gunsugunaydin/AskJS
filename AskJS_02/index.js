const yesButton = document.querySelector(".yes-btn");
const noButton = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const body = document.querySelector("body");
const h2Element = document.querySelector("h2")

// To make the "no" button move randomly
noButton.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noButton.getBoundingClientRect();
  

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

// When the "yes" button is clicked
yesButton.addEventListener("click", () => {
    turnButtonPink(yesButton);
    body.style.backgroundColor = "#999999"
    noButton.style.backgroundColor ="#999999"
    question.innerHTML = "Thank you for the delicious meal 🩷";
    gif.src = "https://media.tenor.com/DLEA4j-yM84AAAAi/cat-sneaky.gif";
    h2Element.classList.add("shining");
});

// To change the specific button's color to pink
function turnButtonPink(button) {
    yesButton.style.backgroundColor = "white";
    yesButton.style.color = "#e94d7c";

    button.style.backgroundColor = "#e94d7c";
    button.style.color = "white";
}
