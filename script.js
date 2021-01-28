const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
function flipCard() {
  if (lockBoard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  //second click
  hasFlippedCard = false;
  secondCard = this;

  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  } else {
    //it's not a match
    lockBoard = true;
    setTimeout(function () {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      lockBoard = false;
    }, 1500);
  }
}

cards.forEach((c) => c.addEventListener("click", flipCard));
