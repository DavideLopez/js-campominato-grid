console.log('campo')

let dimensioneGriglia = 10
let numeroCelle = dimensioneGriglia ** 2
const tabelloneEl = document.querySelector('.tabellone')

generaGriglia(dimensioneGriglia, tabelloneEl)

function generaGriglia(dimensione, tabellone) {
    tabellone.innerHTML = ''
    const numeroCelle = dimensione ** 2

    for (let i = 0; i < numeroCelle; i++) {
        console.log(i)
        // CREA ELEMENTO DIV CON CLASSE SQUARE
        const cella = getSquareElement()
        cella.innerHTML = i + 1
        // APPENDERE ELEMENTO CELLA AL TABELLONE
        tabellone.append(cella)
    }
}

function getSquareElement() {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('click', clickHandler) //passiamo il riferimento della funzione, NON la sua invocazione
    
    return square
}

function clickHandler(event) {
    console.log(event, event.target)
    const square = this // elemento al quale è agganciata la funzione, in questo caso, LO SQUARE
    square.classList.toggle('clicked')
    square.removeEventListener('click', clickHandler)
}
