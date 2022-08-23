const listaDeChamada = ['João','Ana','Caio','Lara','Marjorie','Leo'];

//listaDeChamada.splice(1,2,'Rodrigo',);//tirei Ana e Caio e coloquei o rodrigo
listaDeChamada.splice(2,0,'Rodrigo'); // nesse caso não estou apagando ninguem e só estou incluindo o Rodrigo no meio do Array

console.log(`Lista de Chamada ${listaDeChamada}`);