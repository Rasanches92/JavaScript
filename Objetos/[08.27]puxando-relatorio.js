const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fones:["985764432","321222987"],
    dependentes : [
        {
        nome:"Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
        },
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNasc: "04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor;
    } 
}

let relatorio ="";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue //continuar e não fazer nada
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        ` // Nesse else, quando não estiver um object ou function irá imprimir
    }
}

console.log(relatorio);