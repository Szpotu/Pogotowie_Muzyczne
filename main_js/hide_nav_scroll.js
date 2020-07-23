let prevScrollPosition = window.pageYOffset; // global var - previous scroll px


window.onscroll = () => {
    let actualScrollPosition = window.pageYOffset;


    if (prevScrollPosition < actualScrollPosition || actualScrollPosition > 265) {
        document.getElementById('nav').style.height = '0em';
        document.getElementById('logo').style.display = 'none';



    } else {
        document.getElementById('nav').style.height = '7em';

        document.getElementById('logo').style.display = 'block';

    }

    prevScrollPosition = actualScrollPosition;
}