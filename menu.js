// Espera a página carregar completamente antes de rodar o código
document.addEventListener('DOMContentLoaded', function () {

  // Pega o botão do menu (o botão com o ícone de três linhas)
  const botao = document.getElementById('bot-menu');

  // Pega o menu de navegação (os links: HOME, SOBRE, etc.)
  const menu = document.getElementById('nav-menu');

  // Adiciona um "ouvidor" de clique no botão
  botao.addEventListener('click', function () {

    // Verifica se o menu já está visível (aberto)
    if (menu.style.display === 'block') {
      // Se sim, esconde o menu
      menu.style.display = 'none';
    } else {
      // Se não, mostra o menu
      menu.style.display = 'block';
    }

  });

});



    
  