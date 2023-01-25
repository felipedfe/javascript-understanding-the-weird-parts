console.log("----------ARGUMENTS----------");

// Quando passamos parâmetros a mais para uma função eles são guardados
// em arguments em forma de array

const meuObj = {
  1: 'a',
  2: 'b',
}

function testing(obj) {
  // console.log("arguments: ", arguments, "params: ", obj);
  console.log(arguments)
  for (let item of arguments) {
    console.log(item)
  }
}

// Aqui está sendo passado dois valores a mais
testing(meuObj, 'junior', 44);


// O modo atual é usar um spread pra receber esses valores a mais em uma lista
function testing2(obj,...resto) {
  console.log(resto);
};

testing2(meuObj, 590, true);