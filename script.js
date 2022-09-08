/* const nomeUsuario = prompt("Qual o seu nome ?") */
let possuiClasse1;
let possuiClasse2;
let possuiClasse3;
function modeloSelecionado(escolhido){
    const modeloSelecionadoAnterior = document.querySelector(".escolha .selecionado")

    if(modeloSelecionadoAnterior !== null){
        modeloSelecionadoAnterior.classList.remove("selecionado")

    }
    console.log(escolhido)
    escolhido.classList.add("selecionado")

    possuiClasse1 = escolhido.classList.contains("selecionado"); 
    console.log(possuiClasse1)
    confirmarPedido()
}

function golaSelecionada(golaEscolhida){
    const golaSelecionadoAnterior = document.querySelector(".gola .selecionado")

    if(golaSelecionadoAnterior !== null){
        golaSelecionadoAnterior.classList.remove("selecionado")

    }
    golaEscolhida.classList.add("selecionado")
    possuiClasse2 = golaEscolhida.classList.contains("selecionado"); 
    confirmarPedido()
}
function tecidoSelecionado(tecidoEscolhido){
    const tecidoSelecionadoAnterior = document.querySelector(".tecido .selecionado")

    if(tecidoSelecionadoAnterior !== null){
        tecidoSelecionadoAnterior.classList.remove("selecionado")

    }
    tecidoEscolhido.classList.add("selecionado")
    possuiClasse3 = tecidoEscolhido.classList.contains("selecionado"); 
    confirmarPedido()
}
/* const link = ""; */
function pegarMensagem(){
    /* link = document.querySelector(".input").value
    console.log(link) */
    if(possuiClasse1 & possuiClasse2 & possuiClasse3 === true ){
    alert("confirmando a encomenda")
    }    
}

function confirmarPedido(){
    if(possuiClasse1 & possuiClasse2 & possuiClasse3 === true ){
        const botaoSelecionado = document.querySelector(".confirmar")
        botaoSelecionado.classList.add("botaoSelecionado")
    }
    
}