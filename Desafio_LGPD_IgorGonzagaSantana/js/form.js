function Post(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    const checkTermos = document.getElementById("check1");
  
    if (!data.nome || !data.email || !data.telefone || !data.tipo_contato) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Telefone e Tipo de Contato).");
      return;
    }
  
    if (!checkTermos.checked) {
      alert("Você precisa ler e concordar com os Termos e Condições para enviar.");
      return;
    }
  
    alert(`
      Mensagem Recebida!
      Nome: ${data.nome}
      E-mail: ${data.email}
      Telefone: ${data.telefone}
      Tipo de Contato: ${data.tipo_contato}
      Mensagem: ${data.mensagem}
    `);
  
    console.log(data);
    form.reset();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    
    const sendButton = document.getElementById("btnEnviar");
  
    if (sendButton) {
      
      sendButton.addEventListener('mouseover', () => {
        sendButton.style.transform = 'scale(1.05)';
        sendButton.style.backgroundColor = '#1b357a';
        sendButton.style.transition = 'all 0.3s ease';
      });
  
      sendButton.addEventListener('mouseout', () => {
        sendButton.style.transform = 'scale(1)';
        sendButton.style.backgroundColor = '#1951d8';
      });
    }
  });