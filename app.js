let numeroSecreto = 5;
//gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);

    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou! 🥳");

        let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela("p", `O número secreto é maior`);
        } else {
            exibirTextoNaTela("p", "O número secreto é menor");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100:");
