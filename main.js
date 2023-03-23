'use strict';

const imageTargetor = document.getElementById('pic-of-me');

let toggle = true;
const changeImage = () => {
    toggle = !toggle;
    if (toggle) {
        imageTargetor.src = "/Users/jonathanmalks/Codecademy/portfolio_project/resources/images/jm-profile_.jpeg";
    } else
        imageTargetor.src = "/Users/jonathanmalks/Codecademy/portfolio_project/resources/images/jm-portrait_.jpeg";
};

imageTargetor.addEventListener('click', changeImage);