let btnNext = document.querySelector(".submitbutton button");
let inputs = document.querySelectorAll(".forms input");

btnNext.onclick = function () {
  let qtd = 0;
  inputs.forEach((input) => {
    qtd++;
  });
  inputs.forEach((input) => {
    if (input.value === "") {
      alert("Preencha todos os campos");
    } else {
      qtd--;
    }
  });

  if (qtd === 0) {
    window.location.href = "./index.html";
  }
};