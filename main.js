'use strict';

const imageTargetor = document.getElementById('pic-of-me');


const changeImage = () => {
    let imageTracker = "/Users/jonathanmalks/Codecademy/portfolio_project/resources/images/jm-profile_.jpeg";
    let img = document.getElementById('pic-of-me');
    if (imageTracker === "/Users/jonathanmalks/Codecademy/portfolio_project/resources/images/jm-profile_.jpeg") {
        img.setAttribute('src', "/Users/jonathanmalks/Codecademy/portfolio_project/resources/images/jm-portrait_.jpeg")
        imageTracker = "/Users/jonathanmalks/Codecademy/portfolio_project/resources/images/jm-portrait_.jpeg";
    } else {
        img.setAttribute("src", "/Users/jonathanmalks/Codecademy/portfolio_project/resources/images/jm-profile_.jpeg")
    };
}
imageTargetor.addEventListener('click', changeImage);