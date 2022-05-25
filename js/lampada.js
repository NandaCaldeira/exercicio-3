var button = document.getElementById('onoff')
var lampada = document.getElementById('lampada')
var bodyy = document.getElementById('bodyy')

button.addEventListener('click', () => {

    if (lampada.classList.contains('apagada')) {
        lampada.classList.remove('apagada');
        lampada.classList.add('acesa');
        bodyy.classList.remove('bodyApagada');
        bodyy.classList.add('bodyAcesa');

    } else {
        lampada.classList.remove('acesa');
        lampada.classList.add('apagada');
        bodyy.classList.remove('bodyAcesa');
        bodyy.classList.add('bodyApagada');

    }
})