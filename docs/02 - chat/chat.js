function chatOperation() {
  const msgTxt = document.querySelector('#msgTxt');
  const msgImg = document.querySelector('#msgImg').files[0];
  const chatBox = document.querySelector('#chatBox');
  const reader = new FileReader();

  // Cria um contêiner para a mensagem
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent');

  // Adiciona o texto da mensagem, se houver
  if (msgTxt.value.trim() !== "") {
      const contentElement = document.createElement('div');
      contentElement.classList.add('content');
      contentElement.textContent = msgTxt.value;
      messageElement.appendChild(contentElement);
  }

  // Função para exibir a imagem após a leitura
  reader.onloadend = function() {
      if (msgImg) {
          const imgElement = document.createElement('img');
          imgElement.src = reader.result;
          imgElement.style.maxWidth = '200px';
          imgElement.style.borderRadius = '8px';
          messageElement.appendChild(imgElement);
      }
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
  };

  // Processa a imagem se ela for selecionada
  if (msgImg) {
      reader.readAsDataURL(msgImg);
  } else {
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Limpa os campos de entrada
  msgTxt.value = "";
  document.querySelector('#msgImg').value = "";
}
