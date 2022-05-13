let header = document.querySelector('.js-header'),
    headerH = document.querySelector('.js-header').clientHeight;

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH + 150) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
    } else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
    }
}
