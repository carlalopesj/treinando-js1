var agora = new Date();
var horas = agora.getHours();
h2 = document.getElementById('h2');
h2.innerHTML = (`Agora são ${horas} horas`);

if (horas >= 6 && horas < 12) {
    h3 = document.getElementById('h3');
    h3.innerHTML = ('Esta de dia...')
    body = document.getElementById('body');
    body.style.backgroundColor = '#8585f3';
    img = document.getElementById('imagem');
    img.setAttribute('src', 'imagens/dia.jpg');
} else if(horas >= 12 && horas < 18) {
    h3 = document.getElementById('h3');
    h3.innerHTML = ('Esta de tarde...')
    body = document.getElementById('body');
    body.style.backgroundColor = '#DAA520';
    img = document.getElementById('imagem');
    img.setAttribute('src', 'imagens/tarde.jpg');
} else {
    h3 = document.getElementById('h3');
    h3.innerHTML = ('Esta de noite...')
    body = document.getElementById('body');
    body.style.backgroundColor = '#4B0082';
    img = document.getElementById('imagem');
    img.setAttribute('src', 'imagens/noite.jpg');
}
