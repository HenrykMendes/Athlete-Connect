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