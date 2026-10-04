// PEGANDO O BOTÃO PELO ID

const botao = document.getElementById("botao");


// PEGANDO A MENSAGEM PELO ID

const mensagem = document.getElementById("mensagem");


// QUANDO O BOTÃO FOR CLICADO

botao.addEventListener("click", function() {

    mensagem.textContent =
        "Você está conhecendo o universo do The Weeknd! 🖤";

});