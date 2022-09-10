const nomeUsuario = prompt("Qual o seu nome ?") 
let possuiClasse1;
let possuiClasse2;
let possuiClasse3;

let modeloEscolhido;
let gola;
let tecido;

let dados = {};



function modeloSelecionado(escolhido){
    const modeloSelecionadoAnterior = document.querySelector(".escolha .selecionado")

    

    if(modeloSelecionadoAnterior !== null){
        modeloSelecionadoAnterior.classList.remove("selecionado")

    }
    console.log(escolhido)
    escolhido.classList.add("selecionado")

    possuiClasse1 = escolhido.classList.contains("selecionado"); 
    console.log(possuiClasse1)


    modeloEscolhido = document.querySelector(".selecionado .h1t").innerHTML
    console.log(modeloEscolhido)
    confirmarPedido()
}

function golaSelecionada(golaEscolhida){
    const golaSelecionadoAnterior = document.querySelector(".gola .selecionado")

    if(golaSelecionadoAnterior !== null){
        golaSelecionadoAnterior.classList.remove("selecionado")

    }
    golaEscolhida.classList.add("selecionado")
    possuiClasse2 = golaEscolhida.classList.contains("selecionado"); 

    gola = document.querySelector(".selecionado .h1").innerHTML
    console.log(golaEscolhida)

    confirmarPedido()
}
function tecidoSelecionado(tecidoEscolhido){
    const tecidoSelecionadoAnterior = document.querySelector(".tecido .selecionado")

    if(tecidoSelecionadoAnterior !== null){
        tecidoSelecionadoAnterior.classList.remove("selecionado")

    }
    tecidoEscolhido.classList.add("selecionado")
    possuiClasse3 = tecidoEscolhido.classList.contains("selecionado"); 

    tecido = document.querySelector(".selecionado .h1.o").innerHTML
    console.log(tecidoEscolhido)

    confirmarPedido()
}
let inputPreenchido = "";
function pegarMensagem(){
    inputPreenchido = document.querySelector("input").value
    if(possuiClasse1 === true && possuiClasse2 === true && possuiClasse3 === true ){
    
    confirmarPedido()
}
console.log(inputPreenchido)
}

console.log(inputPreenchido)
function confirmarPedido(){
    if(modeloEscolhido === "Camiseta" )modeloEscolhido = "top-tank"
    if(modeloEscolhido === "T-shirt" )modeloEscolhido = "t-shirt" 
    if(modeloEscolhido === "Manga longa" )modeloEscolhido = "long"

    if(gola === "Gola V" )gola = "v-neck"
    if(gola === "Gola Redonda" )gola = "round"
    if(gola === "Gola polo" )gola = "polo"

    if(tecido === "Seda" )tecido = "silk" 
    if(tecido === "Algodão" )tecido = "cotton"
    if(tecido === "Poliéster" )tecido = "polyester"


    if(possuiClasse1 === true && possuiClasse2 === true && possuiClasse3 === true && inputPreenchido !== ""){
        const botaoSelecionado = document.querySelector(".confirmar")
        botaoSelecionado.classList.add("botaoSelecionado")
        
    dados = {
            model: `${modeloEscolhido}`,
            neck: `${gola}`,
            material: `${tecido}`,
            image: `${inputPreenchido}`,
            owner: `${nomeUsuario}`,
            author: `${nomeUsuario}`
        }

        const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', dados)
        requisicao.then(sucesso)
        requisicao.catch(erro)

        
    }
    

    
 
}



    

 
function sucesso(){
    alert("deu boa ")
}

function erro(){
    alert("Ops, aconteceu um erro ! Verefique se a url da imgem esta correta")
}