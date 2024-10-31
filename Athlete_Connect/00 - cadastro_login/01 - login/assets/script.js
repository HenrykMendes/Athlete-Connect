let modal = document.querySelector(".modal");
let btn = document.querySelector(".loginpage a");
let span = document.querySelector(".close");
let btnModal = document.querySelector(".modal button");
let btnNext = document.querySelector(".submitbutton button");
let inputs = document.querySelectorAll(".forms input");

btnNext.onclick = function () {
  inputs.forEach((input) => {
    if (input.value === "") {
      alert("Preencha todos os campos");
    }
  });
};

btn.onclick = function () {
  modal.style.display = "block";
};

btnModal.onclick = function () {
  if (document.querySelector(".modal input").value === "") {
    alert("Preencha o campo");
  } else {
    modal.style.display = "none";
  }
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};