'use strict';

const darkModeBtn = document.getElementById('dark-mode-btn');
const lightModeBtn = document.getElementById('light-mode-btn');

darkModeBtn.addEventListener('click', function () {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    darkModeBtn.style.display = 'none';
    lightModeBtn.style.display = 'inline-block'; // Mostra o botão para modo claro
});

lightModeBtn.addEventListener('click', function () {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    lightModeBtn.style.display = 'none';
    darkModeBtn.style.display = 'inline-block'; // Mostra o botão para modo escuro
});
