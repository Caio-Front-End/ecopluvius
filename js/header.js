export function headerBehavior() {
    //Recuperando elementos do navbar
const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav');
const navItems = navMenu.querySelectorAll('li');

//Adicionando evento ao click no menu hamburguer
toggleButton.addEventListener('click', () => {
    //Quando clicado, abre a aba lateral com as opções do navbar 
    navMenu.classList.toggle('open');
    //Pra cada item dentro do meu navbar(<li>), eu adiciono uma classe para criar efeito 
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100); // atraso em sequência de acordo com o índice
        //Removo a classe imediatamente para tornar possível ao fechar e abrir novamente
        item.classList.remove('visible')
    });
});
}