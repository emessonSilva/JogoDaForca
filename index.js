const randomWord = "golfinho".toUpperCase;
let splittedWord = randomWord.split("");
let attempt = 6;
let correctLetter = 0;
let storeWord = Array(splittedWord.length).fill("");

function findLetter(letter) {
  console.log(`Letra pressionada: ${letter}`);
  let found = false;

  for (let i = 0; i < splittedWord.length; i++) {
    const element = splittedWord[i];

    if (element === letter) {
      storeWord[i] = letter;
      correctLetter++;

      found = true;
    }
  }

  if (found === false) {
    attempt--;
  }

  if (attempt < 1) {
    console.log("Você perdeu o jogo!");
    return;
  }

  if (correctLetter === randomWord.length) {
    console.log("Parabéns, você ganhou o jogo!");
    return;
  }
}

/**
 * Gera dinamicamente um teclado virtual através da tabela ASCII
 */

function generateKeyboard() {
  //tabela ASCII para letras
  const keyboardHTMLElement = document.getElementById("keyboard");
  console.log(keyboardHTMLElement);

  for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    const button = `<button onclick ="findLetter('${letter}')" type="button" class="btn btn-primary">
    ${letter}</button>`;
    keyboardHTMLElement.innerHTML += button;
  }
}

generateKeyboard();
