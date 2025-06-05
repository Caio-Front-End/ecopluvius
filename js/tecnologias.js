export function tecnologiasBehavior() {
    //Recuperando os cards de tecnologias e a seção de tecnologias
    const cards = Array.from(document.querySelectorAll('.tecnologia-card'));
    const sectionTecnologias = document.querySelector('#tecnologias');

    //Ao evento de scroll, verifica a distância do topo da seção de tecnologias
    window.addEventListener('scroll', () => {
        const sectionTopDistance = sectionTecnologias.getBoundingClientRect().top;
        if (sectionTopDistance <= 400) {
            cards.forEach((card, index) => {
                {
                    //e adiciona a classe de animação aos cards, com um delay progressivo
                    setTimeout(() => {
                        card.classList.add('fade-in-down');
                    }, index * 250);
                }
            })
        }
    }
    )
}