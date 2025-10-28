function Post(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    alert(`
        Mensagem Recebida!
        --------------------
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
    const sendButton = document.querySelector('form button[type="submit"]');

    if (sendButton) {
        sendButton.addEventListener('mouseover', () => {
            sendButton.style.transform = 'scale(1.05)';
            sendButton.style.backgroundColor = '#1b357e';
            sendButton.style.transition = 'all 0.3s ease';
        });

        sendButton.addEventListener('mouseout', () => {
            sendButton.style.transform = 'scale(1)';
            sendButton.style.backgroundColor = '#1351d8';
        });
    }
    function desbloquear(check){
        const bntLGPD = document.getElementById("btnLGPD");
        if(check.checked){
            bntLGPD.disabled = false;
        }else{
            bntLGPD.disabled = true;
        }
    }
});