let modal = document.querySelector(".modal");
let btn = document.querySelector(".switch");
let span = document.querySelector(".close");
let btnModal = document.querySelector(".modal button");
let inputs = document.querySelectorAll(".forms input");
let btnNext = document.querySelector(".submitbutton button");


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

