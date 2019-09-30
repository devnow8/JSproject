const body = document.querySelector("body");

const IMG_N = 8;

function paintImg(IMG_N){
    const image = new Image();
    image.src = `images/${IMG_N}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    
}

function genRandom(){
    const number = Math.ceil(Math.random()*IMG_N);
    return number;
}
function init(){
    const randomNum = genRandom();
    paintImg(randomNum);

}

init();