let container = document.getElementById('container')

let contador = 0





let boton = document.getElementById('agregar').addEventListener('click', () => {
    contador++
    container.innerHTML +=
        `<div id="tarjeta"><p>Tarjeta N°:${contador} </p><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget pulvinar ipsum, in sollicitudin ligula. Etiam et turpis quis odio pretium sodales.<br> <button id="borrar">Borrar</button></div>`

    let borrar = document.getElementById('borrar').addEventListener('click', (e) => {
        tarjeta.remove(e)
    })
})

