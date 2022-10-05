let container = document.getElementById('container')

let contador = 0





let boton = document.getElementById('agregar').addEventListener('click', () => {
    contador++
    container.innerHTML +=
        `<div id="tarjeta"><p>Tarjeta N°:${contador} </p><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget pulvinar ipsum, in sollicitudin ligula. Etiam et turpis quis odio pretium sodales.<br> <button onclick="eliminar(this)" id="borrar">Borrar</button></div>`

    })

    function eliminar(e){
        e.parentNode.parentNode.removeChild(e.parentNode)
    }
