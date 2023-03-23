# Jonny's Porfolio Project

## What is this thing? 

Jonny's portfolio project is a simple website created mostly with static HTML and CSS. There is one interactive portion to the project, however. When clicked, the portrait on the right of the main page changes to a picture of Jonny playing ultimate. This was the first time Jonny tried to integrate interactive elements into a website using JavaScript, so he is very proud of the dinky little thing. 

## Usage

Jonny's portfolio project has only one use: for users to learn about Jonny and his aspirations. The code behind the portrait-switch feature is simple and is layed out as follows: 

```

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

```

## License

n/a for now

Thanks for visiting ;)