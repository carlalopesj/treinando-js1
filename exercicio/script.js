var agora = new Date();
var horas = agora.getHours();
var h2 = document.getElementById('h2');
h2.innerHTML = (`Horário: ${horas}h`);
h3 = document.getElementById('h3');
body = document.getElementById('body');
img = document.getElementById('imagem');

if (horas >= 6 && horas < 12) {
    h3.innerHTML = ('Esta de dia...')
    body.style.backgroundColor = '#8585f3';
    img.setAttribute('src', './imagens/dia.jpg');
} else if(horas >= 12 && horas < 18) {
    h3.innerHTML = ('Esta de tarde...')
    body.style.backgroundColor = '#DAA520';
    img.setAttribute('src', './imagens/tarde.jpg');
} else {
    h3.innerHTML = ('Esta de noite...')
    body.style.backgroundColor = '#4B0082';
    img.setAttribute('src', 'exercicio/imagens/noite.jpg');
}
