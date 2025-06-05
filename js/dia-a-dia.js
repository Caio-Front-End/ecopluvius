export function diaADiaBehavior() {
    const imgMockup = document.querySelector('.mockup-img');
    const title = document.querySelector('.dia-a-dia-section h2');

    document.addEventListener('scroll', (e) => {
        const imgRectTop = imgMockup.getBoundingClientRect().top;

        if (imgRectTop <= 500) {
            imgMockup.classList.add('fade-in-right-bottom');
        }
        if (imgRectTop > 500) {
            imgMockup.classList.remove('fade-in-right-bottom');
        }

        if (imgRectTop <= 700) {
            title.classList.add('fade-in-left-top');
        }

        if (imgRectTop > 700) {
            title.classList.remove('fade-in-left-top');
        }
    })

}