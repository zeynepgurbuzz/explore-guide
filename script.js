function toggleMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    hamburgerMenu.classList.toggle('active'); 

    const isVisible = hamburgerMenu.style.transform === 'translateY(0%)';
    hamburgerMenu.style.transform = isVisible ? 'translateY(-100%)' : 'translateY(0%)';
}
