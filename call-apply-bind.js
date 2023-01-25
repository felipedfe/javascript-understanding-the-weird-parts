console.log("---------CALL-APPLY-BIND---------")
// Call, apply and bind

// São métodos de que toda função possui
// Todos se referem ao 'this', ou seja, o objeto em que a função está

// 1- BIND

// LEMBRE-SE: ARROW FUNCTIONS NÃO POSSUEM 'THIS'!
// O MÉTODO 'getFullName' ABAIXO NÃO PODERIA SER DECLADRADO COMO ARROW FUNCTION 
let person = {
  firstName: "Felipe",
  lastName: "Fernandes",
  getFullname: function () {
    let fullname = this.firstName + ' ' + this.lastName

    return fullname;
  },
};

const logName = function (lang1, lang2) {
  console.log("Logged: ", this.getFullname());
  console.log("Arguments: ", lang1 + ' ' + lang2);
  console.log("----------");
}

// o 'bind' faz uma cópia da função (no caso abaixo a função 'logName')
// e passa o objeto ao qual essa função irá se referenciar
// logo, 'this' na função logName estará referenciando o objeto 'person'
const logPersonName = logName.bind(person);

logPersonName();

// 2 - CALL
// Chama uma função indicando a qual objeto ela se referencia

logName.call(person, 'pt', 'en');

// 3 - APPLY
// Fuciona como o 'call', mas precisa que os parâmetros estejam em um array

logName.apply(person, ['es', 'pt']);

// Outro exemplo de BIND

function multiply(a, b) {
  return a * b
};

// Abaixo essa variável vai receber uma cópia de 'multiply' com o valor de 'a' fixo em 2
// ('this' não tem uso nesse caso, mas é preciso passá-lo como parâmetro)
const multipleByTwo = multiply.bind(this, 2);

console.log(multipleByTwo(4)); // 8

