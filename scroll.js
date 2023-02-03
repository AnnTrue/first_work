
window.addEventListener('scroll', () => {
    const HEADER_HEIGHT = 100;
    let scrollDistance = window.scrollY + HEADER_HEIGHT; // растояние от верха страницы до места скролла

    document.querySelectorAll('section').forEach((section, currentSection) => {

        // здесь мы смотрим в какой мы секции
        if (section.offsetTop <= scrollDistance) {

            // находим все ссылки меню и проходимся по ним
            document.querySelectorAll('.navigation__item').forEach(link => {
                // сначала удаляем все старые классы (active)
                link.classList.remove('navigation__item--active');
            });

            document.querySelectorAll('.navigation__item')[currentSection].classList.add('navigation__item--active');
        }

    });

    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        document.querySelectorAll('.navigation__item').forEach(link => {
            // сначала удаляем все старые классы (active)
            link.classList.remove('navigation__item--active');
        });
        document.getElementById('last_child').classList.add('navigation__item--active');
    }

});



document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});