export function publicoBehavior() {
    //Container e imagens dentro dele
    const containerImgs = document.querySelector('.publico-alvo-imagens');
    const imgBase = document.querySelector('.img-base');
    const imgSobreposta = document.querySelector('.img-sobreposta');

    //Evento ao scrollar a página
    window.addEventListener('scroll', (e) => {
        //Distancia do container em relação ao topo da viewport
        const containerTopDistancia = containerImgs.getBoundingClientRect().top;
        
        //Adiciona a classe de animação quando o container entra na viewport com a condição de distância
        if (containerTopDistancia <= 600) {
            imgBase.classList.add('fade-in-left-top');
            //Usa setTimeout para garantir que a animação de entrada da imagem base ocorra antes da sobreposta
            setTimeout(() => {
                imgSobreposta.classList.add('fade-in-right-bottom')
            }, 300)
        }

        //Remove a classe de animação quando o container sai da viewport
        //e a distância é maior que 700px
        if (containerTopDistancia > 700) {
            imgBase.classList.remove('fade-in-left-top');
            imgSobreposta.classList.remove('fade-in-right-bottom');
        }
    })
}