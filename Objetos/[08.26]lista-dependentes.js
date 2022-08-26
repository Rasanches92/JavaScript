const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fones:["985764432","321222987"],
    dependentes : [{
        nome:"Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014");

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);