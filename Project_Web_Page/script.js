document.getElementById('form-amigo').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('novo-amigo');
    const nome = input.value.trim();
    if (nome) {
        const ul = document.getElementById('lista-amigos');
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
        input.value = '';
    }
});