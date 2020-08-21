let prevScrollPosition = window.pageYOffset; // global var - previous scroll px
const qSelector = document.querySelector('btnNav');

const cache_element = function(htmlElement) {
    return document.getElementById(htmlElement);
}
const changeClass = function(className, element) {
    let firstClass = document.getElementById(element);
    firstClass.className = className;
}

window.onscroll = () => {

    let actualScrollPosition = window.pageYOffset;

    if (prevScrollPosition < actualScrollPosition || actualScrollPosition > 250) {

        changeClass('scrolled-nav', 'nav');
        cache_element('logo').style.opacity = 0;
    } else {

        document.getElementById('logo').style.opacity = 1;
        changeClass('basic-nav', 'nav');
    }

    prevScrollPosition = actualScrollPosition;
}