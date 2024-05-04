//variaveis
function idades(anodenascimento) {
    const anoatual = 2024
    const resualtado = anodenascimento - anoatual
    console.log(resualtado * -1)
}
//idades(2006)

function numerosevalores() {
    const numero1 = 2
    const numero2 = 3
    const soma = numero1 + numero2
    const subtracao = numero1 - numero2
    const multiplicacao = numero1 * numero2
    const divisao = numero1 / numero2
    const resto = numero1 % numero2
}

function comparadores() {
    const numero1 = 30
    const numero2 = 94
    console.log(numero1 === numero2)
    console.log(numero1 !== numero2)
    console.log(numero1 > numero2)
    console.log(numero1 >= numero2)
    console.log(numero1 < numero2)
    console.log(numero1 <= numero2)
}

function operadoreslogicos() {
    const temidadeparadirigir = true
    const temcarteirademotorista = true
    const temcarroproprio = false
    if (temidadeparadirigir === temcarteirademotorista){
        console.log("Você pode dirigir legalmente")
    } else if (temcarroproprio === temcarteirademotorista) {
        console.log("Você pode dirigir, mas seja cuidadoso")
    } else {
        console.log("Você não pode dirigir")
    }
}

function arrays() {
    const nomes = ["EduardO FiguEiro  ", "   ROBErto adRANo", "LucAS nuNes     "]
    console.log(nomes.toLowerCase())
    console.log(nomes.toUpperCase())
    console.log(nomes.trim())
    console.log(nomes.includes())
    console.log(nomes.includes())
    console.log(nomes.includes())
    console.log(nomes.replaceall("a", "#"))
}

function string() {
    const nome = "Eduardo"
    const idade = 20
    const cidade = "Chique-Chique"
    const frasepersonaconcatenada = `Olá meu nome é ${nome} eu tenho ${idade} anos e nasci e cresci em ${cidade}`
    console.log(frasepersona)

}

function funcoes() {
    function areaquadrado() {
        const altura = 5
        const largura = 5
        const area = altura * largura
        console.log(area)
    }
    function arearetangulo() {
        const altura = 10
        const largura = 22
        const area = altura * largura
        consolee.log(area)
    }
    function areatriangulo() {
        const base = 8
        const altura = 8
        const area = (base * altura) / 2
    }
    areaquadrado()
    arearetangulo()
    areatriangulo()
}

function objeto() {
    const nomealuno = "Miguel del Sonic"
    const idade = 15
    const curso = "solda"
    const registrodoaluno = {
        nome: nomealuno,
        idade: idade,
        curso: curso,
    }
    console.log(registrodoaluno)
    const registronovo = {
        ...registrodoaluno,
        notas: []
    }
    registronovo.notas.push(20, 80, 70)
    const soma = registronovo.notas[0] + registronovo.notas[1] + registronovo.notas[2]
    const tamanho = registronovo.notas.length
    const media = soma / tamanho
    console.log(registronovo)
    console.log("á media é: ", media)
}
objeto()