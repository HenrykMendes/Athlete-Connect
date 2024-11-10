let modal = document.querySelector(".modal");
let btn = document.querySelector(".loginpage a");
let span = document.querySelector(".close");
let btnModal = document.querySelector(".modal button");
let inputs = document.querySelectorAll(".forms input");
let btnNext = document.querySelector(".submitbutton button");

// Validação dos campos de input do formulário de login
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
    window.location.href = "../../01 - telas principais/01 - para voce/index.html";
  }
};

// function para abrir o modal
btn.onclick = function () {
  modal.style.display = "block";
};

// function para fechar o modal ao verificar que o input está preenchido
btnModal.onclick = function () {
  if (document.querySelector(".modal input").value === "") {
    alert("Preencha o campo");
  } else {
    modal.style.display = "none";
  }
};

// function para fechar o modal ao clicar no botão de fechar
span.onclick = function () {
  modal.style.display = "none";
};

// function para fechar o modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

