const chalk = require('chalk');
const fs = require('fs');

async function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
  console.log(chalk.green(texto))
}

//function trataErro(erro){
//  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
//}
//
//function pegaArquivo(caminhoDoArquivo){
//  const encoding = 'utf-8';
//  fs.promises
//  .readFile(caminhoDoArquivo, encoding)
//  .then((texto) => console.log(texto))
//  .catch((erro) => trataErro(erro))
//}

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8';
//  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//    if(erro){
//      trataErro(erro);
//    }
//    console.log(chalk.green(texto));
//  })
//}


pegaArquivo('./arquivos/texto1.md');