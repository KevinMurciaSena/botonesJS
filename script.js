const mostrarOcultar = document.getElementById("mostrarOcultar");


document.getElementById('ocultar').style.display = 'block'
document.getElementById('mostrar').style.display = 'none';

function Ocultar(){
    document.getElementById('texto').style.display = 'none';
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('mostrar').style.display = 'block';
    // mostrar = document.createElement("button");
    // mostrar.textContent = "Mostrar"
    // document.body.append(mostrar);
    // mostrar.addEventListener('click', Mostrar);
}

function Mostrar(){
    document.getElementById("texto").style.display = 'block';
    document.getElementById('ocultar').style.display = 'block';
    document.getElementById('mostrar').style.display = 'none';
    // mostrar.parentNode.removeChild(mostrar);
}

