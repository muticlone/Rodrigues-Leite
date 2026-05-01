 const navbar = document.querySelector('.navbar');
  const menu = document.getElementById('menu');
  const overlay = document.querySelector('.navbar-overlay');

  menu.addEventListener('show.bs.collapse', () => {
    navbar.classList.add('ativo');
    overlay.classList.add('ativo');
  });

  menu.addEventListener('hide.bs.collapse', () => {
    navbar.classList.remove('ativo');
    overlay.classList.remove('ativo');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    navbar.classList.remove('ativo');
    overlay.classList.remove('ativo');
  });