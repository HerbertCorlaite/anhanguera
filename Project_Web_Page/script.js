// Abrir e fechar modal
const btnSolicitar = document.getElementById('btn-solicitar-inclusao');
const modal = document.getElementById('modal-inclusao');
const closeModal = document.getElementById('close-modal');
const formSolicitacao = document.getElementById('form-solicitacao');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

btnSolicitar.onclick = () => {
    modal.style.display = 'block';
    mensagemSucesso.style.display = 'none';
    formSolicitacao.reset();
};

closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Simula envio do formulário
formSolicitacao.onsubmit = function(e) {
    e.preventDefault();
    // Aqui você pode implementar o envio real futuramente
    mensagemSucesso.style.display = 'block';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1800);
};