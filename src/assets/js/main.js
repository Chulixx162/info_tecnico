// Cambiar pestañas entre RF y RNF
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`${tabName}-tab`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Resaltar navegación lateral según scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});