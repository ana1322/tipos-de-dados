//Manipulação de String
let primeiroNome = "ana"
let ultimoNome = "aguiar"
let nomeCompleto = primeiroNome + " " + ultimoNome

console.log(nomeCompleto)

//Operações com Numbers
let numero1 = 10
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let mutiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log(soma, subtracao, mutiplicacao, divisao) 

//trabalhando com booleanos
let estaChovendo = false 
if(estaChovendo){
    console.log("esta chovendo")
}else{
    console.log("nao esta chovendo")
}

//trabalhando com null e unidefined
let resposta = null
let nota
console.log(resposta, nota)

//utilizando symbol
let idUnico = Symbol()

let produto = {
    [idUnico]: 1234
}

console.log(produto[idUnico])

// trabalhando com bigInt/numeros
let grandeInteiro = BigInt("12345676789678903456")

console.log(grandeInteiro)

//