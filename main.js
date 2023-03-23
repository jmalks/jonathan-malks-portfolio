const imageTargetor = document.getElementById('pic-of-me');
console.log(imageTargetor);
const imageChange = image => {
    image.src = 'https://dirask.com/static/bucket/1633375165831-yjQ7G6WQeL--image.png';
}
imageTargetor.addEventListener('click', imageChange);