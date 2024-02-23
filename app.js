let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativas} !`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", `Número secreto é menor que ${chute} !`);
    } else {
      exibirTextoNaTela("p", `Número secreto é maior que ${chute} !`);
    }
    tentativas++;
    limparCampo();
  }
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function gerarNumeroAletorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosLista = listaNumerosSorteados.length;

  if (quantidadeElementosLista == numeroLimite) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAletorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAletorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
