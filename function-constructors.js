console.log("---------FUNCTIONAL-CONSTRUCTORS---------")

function Person (firstName, lastName) {
  console.log(this);

  this.firstName = firstName;
  this.lastName = lastName;

}
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// Quando usamos o operador new, o JS cria um objeto vazio. Se a função não retornar nada
// o resultado na linha 4 é um objeto vazio e abaixo adicionamos propriedades a ele usando o
// "this" que é a forma de um objeto se referir a ele mesmo.
const person1 = new Person('Felipe', 'Dias');

console.log(person1.getFullName());

// IMPORTANTE: já em relação à função getFullName, ela não é criada no construtor e sim
// adicionada ao prototype do objeto (toda FUNÇÃO é um objeto e possui um PROTOTYPE, assim como
// um NAME e CODE, que é o lugar onde fica o que será executado quando ela for invocada)


// Por exemplo, quando criamos uma data assim
const date = new Date();
// Date() é uma função construtura (note que ela começa em maiúscula como uma classe)
// logo, ela possui um prototype e podemos ver seus métodos acessando ele
console.log(Date.prototype.getDate);
// se invocarmos a função getDate teremos um erro, pois ela não vai acessar nenhum objeto 
// (precisaríamos de um objeto instanciado)
console.log(date.getDate());


// Um exemplo interessante:
// Aqui adicionamos uma nova função ao prototype do objeto String
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
}
const nome = "Felipe";

console.log(nome.isLengthGreaterThan(3));
// Agora todas as strings terão esse método quando forem criadas