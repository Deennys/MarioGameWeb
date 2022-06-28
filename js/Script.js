var mario = document.querySelector("#mario-correndo");
var cano = document.querySelector("#cano");

var jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

var loop = setInterval(() => {
    var canoPosicao = cano.offsetLeft;
    var marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(canoPosicao <= 108 && canoPosicao > 0 && marioPosicao <= 82) {
        cano.style.animation = 'none';
        cano.style.left = `${canoPosicao}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosicao}px`;
        mario.src = './images/marioMorto.webp';
        mario.style.width = '105px';
        mario.style.marginLeft = '32px';

        clearInterval(loop);

    }

},10)

document.addEventListener("keydown", jump);