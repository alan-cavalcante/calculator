let valor1
let valor2
let operador


function colarResultado(numero) {
    let final = document.getElementById('numerosDisplay')
    final.textContent += numero
    //console.log(final.textContent)
    return valor1 = final.textContent
}
function colarResultado2(numero) {
    let final2 = document.getElementById('numerosDisplay')
    final2.textContent += numero
    //console.log(final2.textContent)
    return valor2 = final2.textContent
}

function getNumber(nmb) {
    colarResultado(nmb)
}

function getNumber2(nmb) {
    colarResultado2(nmb)
}

function getDivision(operator) {
    let final = document.getElementById('numerosDisplay')
    final.textContent = ''
    operador = operator // colarResultado('/')
    const atrib = document.getElementsByClassName('pad')
    for (a of atrib) {
        a.setAttribute("onclick", "getNumber2(this.id)")
    }
}

function getMultiply() {
    colarResultado('*')
}

function getSubtraction() {
    colarResultado('-')
}

function getAdd() {
    colarResultado('+')
}

function getComma() {
    colarResultado(',')
}

function getDot() {
    colarResultado('.')
}

function igual() {
    let oprtrs = {
        '+': function(a, b) {return a + b;},
        '*': function(a, b) {return a * b;},
        '/': function(a, b) {return a / b;},
        '-': function(a, b) {return a - b;}
    }
    console.log(oprtrs[operador](valor1, valor2))
}

function Clear() {

}

function AllClear() {
    let display = document.getElementById('numerosDisplay')
    display.textContent = ''
}

// const btnAdicao = document.getElementById('adicao')
// const btnMultiplicacao = document.getElementById('multiplicacao')
// const btnDivisao = document.getElementById('divisao')
// const btnSubtracao = document.getElementById('subtracao')
