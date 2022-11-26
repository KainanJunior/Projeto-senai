/* prompt('qual é o seu nome?')//pergunta
confirm('Confirma sua inscrição?')//Ok ou Cancelar
document.write('kainan')//escreve no "body" */

//tipos de variáveis

/* var nome='kainan' */
/* nome= 'jeraldo'
console.log(nome) */
/*  
nome - String
idade - Number
verdadeiro ou falso - Boolean
indefinido - undefined
nulo - null */

/* 
let nome=String(prompt('Qual é o seu nome?'))
document.write('ola, '+nome)//usa o + para concatenar  */

/* let nome= 'Kainan'
document.write('Ola, '+nome+'. Seu nome tem '+nome.length+' letras ')
document.write(nome.toUpperCase()) */

/* let numero=prompt('Digite um numero')
let proxNumero=prompt('Digite outro numero') //camelCase
let resultado=numero+proxNumero
alert(resultado) */

/* let valor=14.5
document.write(valor.toFixed(2).replace('.',','))
document.write(valor.toLocaleString('pt-br', {style:'currency',currency:'BRL'})) */

//objetos

/* let dados={ //chave e valor
    nome:'kainan',
    idade:16,
    estaAprovado:true
}
console.log(dados.nome)
console.log(dados.idade)
console.log(dados.estaAprovado) */

//Array

/* let idades=[16,20,18,36,true,'Kainan']
console.log(idades[2])
console.log(idades.length) */

//Fuctions (técnica verbo + substantivo)

/* let corSite='azul'
console.log(corSite)
function resetaCor(){//sem parâmetros()
    corSite=''
}
resetaCor()
console.log(corSite) */

/* let corSite='azul'
function trocaCor(cor){//com parâmetro
    corSite=cor
}
let cor=prompt('Qual é a cor?')
trocaCor(cor)

console.log(corSite) */

/* let nome=''

function escreverNome(novoNome){
    document.write(novoNome)
}
let novoNome=prompt('Qual seu nome?')
escreverNome(novoNome) */

/* function mutiplicar(n1,n2){
    return n1*n2
}
let resultado=mutiplicar(2,5)
console.log(resultado) */

//Operadores  matemáticos 
//+,-,/,*,**(Exponenciação)

/* let valor=5 // '5' < string //
console.log(valor+valor)
console.log(valor-valor)
console.log(valor/valor)
console.log(valor*valor)
console.log(valor**valor)

//Incremento e descremento
//++,--, de 1 em 1

console.log(--valor)
console.log(++valor)

//caucular a propria variavel

valor*=valor //valor=valor*valor
console.log(valor) */

//operadores lógicos matemáticos
//==(igualdade)
//===(estritatamente igual)
//console.log('3'===3) - avalia caractere e tipo
//!=(desigualdade)
//!==(estritamente desigual)
//console.log(2!=='2')

//Operadores lógicos de desvio 
//&& and  (e / conjunção)
//|| or (ou / disnjunção)
// ! not (negação)

//Exemplo: Inscrição para maiores de idade e baixa renda 
/* let maiorDeIdade=true
let baixaRenda=false
let podeInscrever=maiorDeIdade||baixaRenda
console.log(podeInscrever)
let inverter=!podeInscrever */

//Desvio condicional

//if(se), Else(caso contrario / se não)
/* let corRGB='verde'
if(corRGB==='vermelho'||corRGB==='verde'||corRGB==='azul'){
    console.log('Pertence ao RGB')
}
else{
    console.log("Não pertence ao corRGB")
}
 */

/* let hora=12
if(hora>=6 && hora<12){
    console.log('Bom dia!')
}
else if(hora>=12 && hora<18){
    console.log('Boa tarde')
}
else{
    console.log('Boa noite')
} */

//Operator ternário
//?(separa o teste lógico dos resultados)
//: (sepera os resultados)
/* let ponto=40
let result=pontos>50 ? 'Aprovadi' : 'Reprovado'
console.log(result) */

//Switch-case (caso tenh uma troca) 
/* let login='gerente'

switch(login){
    case 'comum' : 
        console.log('usuario comum')
        break
    case 'gerente' : 
        console.log('usuario gerência')
        break
    case 'diretor' : 
        console.log('usuario diretor')
        break
    default:
        console.log('usuario não identificado')
} */
