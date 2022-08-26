const cliente = {
    nome:"Andre",
    idade:36,
    CPF:"123456789",
    email:"andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(cliente.CPF.substring(0,3));//A substring vai pegar apenas os 3 primeiros números do CPF