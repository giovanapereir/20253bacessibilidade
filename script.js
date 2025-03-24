document.addEventListener('DOMContentLoaded',function(){
const botaoAcessibilidade= document.getElementById('botao-acessiblidade');
const opcoeAcessibilidade =document.getElementById('apresenta-lista')

botaoAcessibilidade.addEventListener('click',function(){ botaoAcessibilidade.classList.toggle('rotacao-menu')

})
const aumentaFonteBotao = document.getElementById ('aumentar-fonte');
const diminuiFonteBotao = document.getElementById ('diminuir-fonte');

let tamanhoFonteAtual = 1;

aumentaFonteBotao.addEventListener('clik', function(){
    tamanhoFonteAtual += 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})


diminuiFonteBotao.addEventListener('clik', function(){
    tamanhoFonteAtual -= 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})

})