export function scrollSuave() {
    // Seleciona todos os links do header que apontam para seções internas
    const links = document.querySelectorAll('header nav a[href^="#"]');
    // Seleciona o header para calcular sua altura
    const header = document.querySelector('header');
    // Variável para armazenar a altura do header
    let headerHeight = 0;

    if (header) {
        // Pega a altura real do header (incluindo padding/border)
        headerHeight = header.offsetHeight;
    }

    // Adiciona o evento de clique a cada link
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Verifica se o link tem um href válido que aponta para uma seção interna
            const targetId = this.getAttribute('href');
            // Se o href for válido e não for apenas '#', realiza o scroll suave
            if (targetId && targetId !== '#') {
                // Seleciona o elemento alvo usando o ID do href
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    // Calcula a posição do topo da seção descontando a altura do header fixo
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    // Realiza o scroll suave até a posição calculada
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}