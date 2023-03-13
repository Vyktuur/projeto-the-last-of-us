/*
    OBJETIVO
    Ao clicar botão mudar a imagem
    
    passo 1 - pegar os elementos HTML dos botoes
    passo 2 - pegar ação de clique do usuario no botao
    passo 3 - desmarcar o botão anterior
    passo 4 - marcar o botão clicado como se estivesse selecionado
    passo 5 - esconder a imagem anterior
    passo 6 - fazer aparecer a imagem correspondente ao botao clicado
*/

//passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão anterior
        desativarBotaoSelecionado();

        //passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //passo 5 - esconder a imagem anterior
        esconderImagemAtiva();

        //passo 6 - fazer aparecer a imagem correspondente ao botao clicado
        newFunction(indice);

    })
})


function newFunction(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSeleciondo = document.querySelector('.selecionado');
    botaoSeleciondo.classList.remove('selecionado');
}

