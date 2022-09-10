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
    liberarPedido()
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

    liberarPedido()
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

    liberarPedido()
}
let inputPreenchido = "";
function pegarMensagem(){
    inputPreenchido = document.querySelector("input").value
    if(possuiClasse1 === true && possuiClasse2 === true && possuiClasse3 === true ){
    
    liberarPedido()
}

}




function liberarPedido(){
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
     
    }
    
}

function confirmarPedido(){

    if(possuiClasse1 === true && possuiClasse2 === true && possuiClasse3 === true && inputPreenchido !== ""){
    dados = {
        model: `${modeloEscolhido}`,
        neck: `${gola}`,
        material: `${tecido}`,
        image: `${inputPreenchido}`,
        owner: `${nomeUsuario}`,
        author: `${nomeUsuario}`
    }

    const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', dados)
    requisicao.then(trataresposta)
    requisicao.catch(erro)

    alert("COnfirmando pedido")
    }
}



    

/*  
function sucesso(){
    alert("deu boa ")
} */

function erro(){
    alert("Ops, não conseguimos processar sua encomenda")
}

const promessa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    promessa.then(trataresposta)





function trataresposta(resposta){
    const dadoSer = resposta.data
    

    const camisas = document.querySelector(".colecao")
    for(let i = 0; i < dadoSer.length; i++){
    camisas.innerHTML += `  <div class="card" onclick="pedido()">
                                <img class="imgColecao" src="${dadoSer[i].image}">
                                <h3>Criador: ${dadoSer[i].owner}</h3>
                            </div>
                            
                `
            }
            
}


function pedido(){
    confirm("Seu pedido é :" + gola)
    
}