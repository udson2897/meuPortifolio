document.addEventListener('DOMContentLoaded', function() {
    const botaoTema = document.getElementById('bot-tema');
    const body = document.body;

    // Verifica o tema salvo
    if (localStorage.getItem('tema') === 'dark') {
        body.classList.add('dark-mode');
        // Atualiza o ícone para sol se estiver no modo escuro
        botaoTema.innerHTML = '<i class="bi bi-sun"></i>';
    }

    botaoTema.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Atualiza o ícone e salva a preferência
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
            botaoTema.innerHTML = '<i class="bi bi-sun"></i>';
        } else {
            localStorage.setItem('tema', 'light');
            botaoTema.innerHTML = '<i class="bi bi-moon"></i>';
        }
    });

    // Menu sanduíche (mantenha o código existente)
    const hamburguerBtn = document.getElementById('hamburguer-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburguerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('nav-aberto');
    });
});








    
  