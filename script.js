document.addEventListener('DOMContentLoaded', () => {
    // Inicia a biblioteca de animações
    AOS.init({
        duration: 800, // Duração da animação em ms
        once: true, // Animação acontece apenas uma vez
    });

    // Script para menu hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Script para o botão "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Mostra o botão após rolar 300px
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // --- SCRIPT DO TEMA CLARO/ESCURO ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeToggle.textContent = '🌙';
            themeToggle.setAttribute('aria-label', 'Ativar tema claro');
            themeToggle.setAttribute('title', 'Ativar tema claro');
        } else {
            body.classList.remove('dark-theme');
            themeToggle.textContent = '☀️';
            themeToggle.setAttribute('aria-label', 'Ativar tema escuro');
            themeToggle.setAttribute('title', 'Ativar tema escuro');
        }
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // Aplica o tema salvo ao carregar a página
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});


 