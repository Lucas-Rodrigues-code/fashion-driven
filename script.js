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
    
    modeloEscolhido = document.querySelector(".selecionado .h1t").innerHTML
    
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
    requisicao.then(trataPost)
    requisicao.catch(erro)

   /*  alert("Confirmando pedido") */
    

    }
}

function trataPost(){
    alert("Confirmando pedido")
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    promessa.then(trataresposta)
    promessa.catch() 

   
     
}



function erro(){
    alert("Ops, não conseguimos processar sua encomenda")
}

const promessa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
promessa.then(trataresposta) 





function trataresposta(resposta){

    
    const dadoSer = resposta.data
    console.log(resposta.data)

    const camisas = document.querySelector(".colecao")
    camisas.innerHTML = "";
    for(let i = 0; i < dadoSer.length; i++){
    camisas.innerHTML += `  <div class="card" onclick="pedido(this)">
                                <img class="imgColecao" src="${dadoSer[i].image}">
                                <h3>Criador: ${dadoSer[i].owner}</h3>
                                <span class="escondido"> 
                                    <div class="model">${dadoSer[i].model}</div>
                                    <div class="image">${dadoSer[i].image}</div>
                                    <div class="material">${dadoSer[i].material}</div>
                                    <div class="neck">${dadoSer[i].neck}</div>
                                    <div class="owner">${dadoSer[i].owner}</div>
                                </span>
                            </div>
                            
                `
            }

            
}


function pedido(divCard){
    const divSpan = divCard.lastElementChild
 
    const infoPedidos = {
        modelo: divSpan.children[0].innerHTML,
        imagem:divSpan.children[1].innerHTML,
        material:divSpan.children[2].innerHTML,
        neck:divSpan.children[3].innerHTML,
        owner:divSpan.children[4].innerHTML
    }

    console.log(infoPedidos)
    resultado = window.confirm(`Pedido criado por: ${infoPedidos.owner} 
    Modelo :${infoPedidos.modelo}
    Material :${infoPedidos.material}
    Tipo de gola :${infoPedidos.neck}

    Deseja confirmar ?
    `);
    if(resultado === true){
        
        confirmarPedidoUsuario(infoPedidos)
    }
}



function confirmarPedidoUsuario(infoPedidos){

    const dados2 = {
        model: `${infoPedidos.modelo}`,
        neck: `${infoPedidos.neck}`,
        material: `${infoPedidos.material}`,
        image: `${infoPedidos.imagem}`,
        owner: `${nomeUsuario}`,
        author: `${infoPedidos.owner}`
    }

    const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', dados2)
    requisicao.then(trataPost)
    requisicao.catch(erro)

   
    

    
}