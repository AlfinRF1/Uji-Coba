const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];

yesBtn.onclick = () => {
  if(img.src === "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png") {
    window.open('https://wa.me/6285648888656', '_blank');
  }
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I like you Dhilaa";
  secondQuestion.innerHTML = "How about you?";
  img.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
