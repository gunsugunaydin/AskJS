const yesButton = document.querySelector(".yes-btn");
const noButton = document.querySelector(".no-btn");
const lieButton = document.querySelector(".lie-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const body = document.querySelector("body");
let bgChangeInterval;  


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
    question.innerHTML = "I am ready to go 🎉";
    gif.src = "https://media.tenor.com/QEBvTb9FaBkAAAAi/ops.gif";
    startBgChange();
});

// When the "lie" button is clicked
lieButton.addEventListener("click", () => {
    stopBgChange();
    turnButtonPink(lieButton);
    question.innerHTML = "See when?.";
    gif.src = "https://media.tenor.com/nDfFkM7-DUUAAAAi/stitch.gif";
});

// To change the specific button's color to pink
function turnButtonPink(button) {
    yesButton.style.backgroundColor = "#e8f4f8";
    yesButton.style.color = "#e94d7c";
    
    lieButton.style.backgroundColor = "#e8f4f8";
    lieButton.style.color = "#e94d7c";

    button.style.backgroundColor = "#e94d7c";
    button.style.color = "#e8f4f8";
}

// To change the background and button colors every 0.975 seconds
function startBgChange() {
    stopBgChange(); 

    bgChangeInterval = setInterval(() => {
        const isWhite = body.style.backgroundColor === "white";

        body.style.backgroundColor = isWhite ? "#e8f4f8" : "white";

        yesButton.style.backgroundColor = isWhite ? "#e8f4f8" : "white";
        yesButton.style.color = isWhite ? "#e94d7c" : "#e94d7c";

        lieButton.style.backgroundColor = isWhite ? "#e8f4f8" : "white";
        lieButton.style.color = isWhite ? "#e94d7c" : "#e94d7c";

        noButton.style.backgroundColor = isWhite ? "#e8f4f8" : "white";
        noButton.style.color = isWhite ? "#e94d7c" : "#e94d7c";
    }, 975);
}

// To stop changing the background and button colors
function stopBgChange() {
    clearInterval(bgChangeInterval);
}

