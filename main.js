let valor1
let valor2
let operador
let igualdade = 0

function colarResultado(numero) {
    let final = document.getElementById('numerosDisplay')
    final.textContent += numero
    return valor1 = final.textContent
}
function colarResultado2(numero) {
    let final2 = document.getElementById('numerosDisplay')
    final2.textContent += numero
    return valor2 = final2.textContent
}

function getNumber(nmb) {
    colarResultado(nmb)
}

function getNumber2(nmb) {
    colarResultado2(nmb)
}

function getOperator(operator) {
    let final = document.getElementById('numerosDisplay')
    final.textContent = ''
    operador = operator
    const atrib = document.getElementsByClassName('pad')
    for (a of atrib) {
        a.setAttribute("onclick", "getNumber2(this.id)")
    }
}

function igual() {
    let final3 = document.getElementById('numerosDisplay')
    final3.textContent = ''

    let oprtrs = {
        '+': function (a, b) { return +a + +b },
        '*': function (a, b) { return a * b },
        '/': function (a, b) { return a / b },
        '-': function (a, b) { return a - b }
    }
    console.log(oprtrs[operador](valor1, valor2))

    let operacao = oprtrs[operador](valor1, valor2)
    final3.textContent += operacao

    valor1 = final3.textContent
    igualdade = 1
}

function Clear() {
    if (igualdade == 1) {
        AllClear()
    }

    const atrib = document.getElementsByClassName('pad')
    let array = []
    for (a of atrib) {
        array.push(a.getAttribute("onclick"))
    }

    if (array[1] == "getNumber(this.id)") {
        let display = document.getElementById('numerosDisplay')
        display.textContent = ''
        valor1 = 0
    }

    if (array[1] == "getNumber2(this.id)") {
        let display = document.getElementById('numerosDisplay')
        display.textContent = ''
        valor2 = 0
    }
}

function AllClear() {
    let display = document.getElementById('numerosDisplay')
    display.textContent = ''
    valor1 = 0
    valor2 = 0
    const atrib = document.getElementsByClassName('pad')
    for (a of atrib) {
        a.setAttribute("onclick", "getNumber(this.id)")
    }
    igualdade = 0
}