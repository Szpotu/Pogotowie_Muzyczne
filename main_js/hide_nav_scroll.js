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


    if (prevScrollPosition < actualScrollPosition || actualScrollPosition > 265) {


        changeClass('scrolled-nav', 'nav');
        cache_element('logo').style.opacity = 0;
        cache_element('language-shifter').style.opacity = 0;

        //Loop

    } else {
        cache_element('language-shifter').style.opacity = 1;
        document.getElementById('logo').style.opacity = 1;

        changeClass('basic-nav', 'nav');

    }

    prevScrollPosition = actualScrollPosition;
}