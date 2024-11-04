let modal = document.querySelector(".modal");
let btn = document.querySelector(".postButton");
let span = document.querySelector(".close");
let btnModal = document.querySelector(".modal button");

// function para abrir o modal
btn.onclick = function () {
  modal.style.display = "flex";
};

// function para fechar o modal ao verificar que o input está preenchido
btnModal.onclick = function () {
  if (document.querySelector("#textPost").value === "") {
    alert("Preencha o campo");
  } else {
    modal.style.display = "none";
  }
};

// function para fechar o modal ao clicar no botão de fechar
span.onclick = function () {
  modal.style.display = "none";
};


