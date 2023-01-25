console.log("----------CLOSURES----------");
// Closures
// a função retornada poderia ser guardada em uma variável

function greet(whattosay) {
  return function (name) {
    console.log(whattosay + ' ' + name);
  };
};

greet("Oi")("Felipe");

//

function buildFunction() {
  let arr = []

  for (let i = 0; i < 3; i += 1) {
    arr.push(() => console.log(i))
  }

  return arr;
}

const fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();

//

const matriz = {
  en: "hi",
  es: "hola",
  pt: "olá"
}

function greetingByLanguage (language) {
  return function(firstName) {
    console.log(matriz[language] + ' ' + firstName)
  }
};

const greetingPortuguese = greetingByLanguage("pt");
greetingPortuguese("Felipe");
