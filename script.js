/*
Carne - 400gr por homem, 300gr por mulher / Tempo > 6h - 650gr por homem, 500gr por mulher
Cerveja - 1200ml por pessoa / Tempo > 6h - 2000ml
Refrigerante/água - 1000ml por pessoa / Tempo > 6h - 1500ml

CRIANÇAS NÃO CONSOMEM ÁLCOOL E VALEM 1/2 DE CADA UM DOS VALORES RESTANTES
*/

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputNaoBebe = document.getElementById("naobebe");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

//1º, pelos id's de meus elementos, transformo-os em variáveis que
//podem ser manipuladas - aqui, estou acessando o elemento como um
//todo, não apenas o valor que o usuário inseriu nele.

//console.log(inputAdultos.value, inputCriancas.value, inputDuracao.value);

let resultados = document.getElementById("resultados");

function calcular(){
    console.log("Calculando...");

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let naobebe = inputNaoBebe.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = (carnePorH(duracao) * homens) + (carnePorM(duracao) * mulheres) + (carnePorH(duracao) / 2 * criancas);
    console.log(qtdCarne);

    let qtdCerveja = (cervejaPorH(duracao) * homens) + (cervejaPorM(duracao) * mulheres);
    console.log(qtdCerveja);

    let qtdBebidas = (bebidasPorP(duracao) * homens) + (bebidasPorP(duracao) * mulheres) + (bebidasNaoBebe(duracao) * naobebe) + (bebidasPorP(duracao) / 2 * criancas);
    console.log(qtdBebidas);


    resultados.innerHTML = `<p>${qtdCarne / 1000}Kg de carnes</p>`
    resultados.innerHTML += `<p>${Math.ceil(qtdCerveja / 355)} latas de cerveja</p>`
    resultados.innerHTML += `<p>${Math.ceil(qtdBebidas / 2000)} garrafas de bebidas`
}

function carnePorH(duracao){
    let carne = 400;
    if(duracao >= 6){
        carne = 650;
    }
    return carne;
}

function carnePorM(duracao){
    let carne = 300;
    if(duracao >= 6){
        carne = 500;
    }
    return carne;
}

function cervejaPorH(duracao){
    let cerveja = 1200;
    if(duracao >= 6){
        cerveja = 2000;
    }
    return cerveja;
}

function cervejaPorM(duracao){
    let cerveja = 900;
    if(duracao >= 6){
        cerveja = 1600;
    }
    return cerveja;
}

function bebidasPorP(duracao){
    let bebidas = 1000;
    if(duracao >= 6){
        bebidas = 1500;
    }
    //console.log(bebidas);
    //console.log(mulheres.value, homens.value);
    return bebidas;
}

function bebidasNaoBebe(duracao){
    let bebidas = 1200;
    if(duracao >= 6){
        bebidas = 2000;
    }
    return bebidas;
}

function loaded(){

    let button = document.getElementById("button");
    
    button.onmouseover = mudarText;
    
}

    
function mudarText(){
    
    this.innerHTML = "Partiu!";
    
}