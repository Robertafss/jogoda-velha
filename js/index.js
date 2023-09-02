function MinhaFunction() {
  const myCollection = document.getElementsByTagName("p", "h2");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "MediumTurquoise";
  }
}
const jogadavez = document.querySelector(".jogadavez");

let selected;
let joguinho = "♥";

let posicao = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function novoMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = joguinho;
  e.target.removeEventListener("click", novoMove);
  selected[index] = joguinho;

  setTimeout(() => {
    check();
  }, [100]);

  joguinho = joguinho === "♥" ? "ღ" : "♥";
  jogadavez.innerHTML = ` ESSE É JOGADOR DA VEZ: ${joguinho}`;
}

function check() {
  let joguinhodepois = joguinho === "♡" ? "ღ" : "♡";

  const pecas = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === joguinhodepois)
    .map((item) => item[1]);

  for (pos of posicao) {
    if (pos.every((item) => pecas.includes(item))) {
      alert("ESSE JOGADOR '" + joguinhodepois + "' GANHOU!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("EITA, DEU EMPATE!");
    init();
    return;
  }
}

function init() {
  selected = [];

  jogadavez.innerHTML = `ESSE É JOGADOR DA VEZ: ${joguinho}`;

  document.querySelectorAll(".jogarr button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", novoMove);
  });
}
init();
