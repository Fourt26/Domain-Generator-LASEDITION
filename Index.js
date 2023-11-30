// Arrays con elementos
const array1 = ["the", "our"];
const array2 = ["great", "big"];
const array3 = ["jogger", "racoon"];

// Función para obtener un elemento aleatorio de un array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Función para generar un enlace aleatorio
function generateRandomLink() {
  const part1 = getRandomElement(array1);
  const part2 = getRandomElement(array2);
  const part3 = getRandomElement(array3);

  // Puedes personalizar el formato del enlace según tus necesidades
  const randomLink = `https://${part1}${part2}${part3}.com`;
  let arrayDeEnlaces = [];
  if (arrayDeEnlaces.includes(randomLink)) {
    generateRandomLink();
  } else arrayDeEnlaces.push(randomLink);

  var writeLinks = document.getElementById("listaDeLinks");
  writeLinks.innerHTML = `${arrayDeEnlaces}`;
  return arrayDeEnlaces;
}

// Ejemplo de uso
const arrayDeEnlaces = generateRandomLink();
console.log(arrayDeEnlaces);
//Este código utiliza las funciones getRandomElement para obtener un elemento aleatorio de un array y generateRandomLink para combinar elementos de los tres arrays y formar un enlace aleatorio. Puedes ajustar el formato del enlace según tus preferencias.
