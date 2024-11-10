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


//botão de like
function Toggle1(btn) {
  var icon = btn.querySelector('i');

  // Alternar entre os estados de coração preenchido e vazio
  if (icon.classList.contains('bi-heart-fill')) {
    icon.classList.remove('bi-heart-fill');
    icon.classList.add('bi-heart');
    btn.style.color = "grey"; // Cor cinza quando o coração não estiver preenchido
  } else {
    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');
    btn.style.color = "red"; // Cor vermelha quando o coração estiver preenchido
  }
}

