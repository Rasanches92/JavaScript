const livros = require('./[08.28]lista-livros');

function menorValor(arrProdutos, posicaoInicial)
{
    let maisBarato = posicaoInicial;

    for (let atual = 0; atual < arrProdutos.length; atual++ )
    {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco)
        {
            maisBarato = atual
        }
    }
    return maisBarato;    
}

module.exports = menorValor;