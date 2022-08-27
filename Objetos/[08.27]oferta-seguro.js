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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);