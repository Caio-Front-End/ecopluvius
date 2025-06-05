export function objetivosBehavior() {
    //Recuperando os elementos (perguntas e respostas) do HTML
    const dts = document.querySelectorAll('.objetivos-section dl dt');
    const dds = document.querySelectorAll('.objetivos-section dl dd');

    dts.forEach((dt, index) => {
        //Ouvinte do evento de scroll para cada pergunta
        document.addEventListener('scroll', (e) => {
            //Verifica se o elemento dt está visível na tela
            const dtRectTop = dt.getBoundingClientRect().top;

            //Se o elemento dt estiver visível, adiciona a classe 'dt-ativo' e 'dd-ativo' ao respectivo dd
            if (dtRectTop <= 500) {
                dt.classList.add('dt-ativo');
                dds[index].classList.add('dd-ativo');
            }
            
            //Se o elemento dt não estiver visível, remove a classe 'dt-ativo' e 'dd-ativo' do respectivo dd
            if (dtRectTop > 500) {
                dt.classList.remove('dt-ativo');
                dds[index].classList.remove('dd-ativo');
            }
        })
    })
}