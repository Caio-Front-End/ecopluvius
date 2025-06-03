export function problemaBehavior() {
    //Recuperando elementos da Hero
    const heroTexts = document.querySelector('.problema-texto');
    const heroTextsChildren = Array.from(heroTexts.children);
    const heroImg = document.querySelector('.problema-imagem').firstElementChild;

    //Evento quando a janela for carregada
    window.addEventListener('load', () => {
        //Para cada um dos elementos (h2 e p), adiciona a classe com o intervalo de tempo multiplicado pelo seu índice
        heroTextsChildren.forEach((text, index) => {
            setTimeout(() => {
                text.classList.add('aparecer-esquerda');
            }, index * 100);
            text.classList.remove('aparecer-esquerda');
        });


        //Adiciona a classe de animação para a imagem
        heroImg.classList.add('aparecer-direita');
        setTimeout(() => {
            //Remove a classe de animação para caso a página seja recarregada
            //Remove imediatamente após o fim da animação (que dura 600ms) *css animation..*
            heroImg.classList.remove('aparecer-direita');
        }, 600);
    })
}