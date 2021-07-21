window.onload = function() {
    let enlaces = document.getElementsByTagName('a');
    for(i in enlaces) {
        enlaces[i].onclick = muestraOculta;
    }
}
  
function muestraOculta() {
    let idEnlace = this.id;
    let trozos = idEnlace.split('_');
    let numero = trozos[1];
    let parrafo = document.getElementById('contenidos_' + numero);
  
    switch(parrafo.style.display) {
        case 'none':
            parrafo.style.display = 'block';
            this.innerHTML = 'Ocultar contenidos';
            break;
        case 'block':
        case '':
            parrafo.style.display = 'none';
            this.innerHTML = 'Mostrar contenidos';
        break;
    }
}