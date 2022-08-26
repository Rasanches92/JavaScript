const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fones:["985764432","321222987"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco: "filha",
    dataNascimento: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);