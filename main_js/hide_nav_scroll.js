let prevScrollPosition = window.pageYOffset; // global var - previous scroll px
const qSelector = document.querySelector('btnNav');
const cache_element = function(htmlElement) {
    return document.getElementById(htmlElement);
}
const changeClassOfElement = function(className, element) {
    let firstClass = document.getElementById(element);
    firstClass.className = className;
}

window.onscroll = () => {

        let actualScrollPosition = window.pageYOffset;
        if (prevScrollPosition < actualScrollPosition || actualScrollPosition > 250) {

            cache_element('nav').className = 'scrolled-nav';
            cache_element('logo').style.opacity = 0;
            cache_element('navBtn').className = 'shrinked-nav.btn';


        } else {
            cache_element('logo').style.opacity = 1;
            cache_element('nav').className = 'basic-nav';
        }

        prevScrollPosition = actualScrollPosition;
    }
    // Class change for scroll nav
    // Remove html elements while hamburger visible