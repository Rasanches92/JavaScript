const notas = [10, 9, 8, 7 ,6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota); //utilizar array com novos valores. ++nota irá adicional um e retornar

console.log(notasAtualizadas);