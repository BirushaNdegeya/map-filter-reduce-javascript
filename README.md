# Comment utiliser map-filter-reduce-javascript

Vous pouvez utilisez ces differentes ressources de MDN JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Vous pouvez aussi telecharger le code source pour executer localement

- https://github.com/BirushaNdegeya/map-filter-reduce-javascript


## UTILISEZ LE MAP

La fonction map() en JavaScript est utilisée pour itérer sur un tableau et appliquer une fonction à chaque élément du tableau. Elle crée un nouveau tableau contenant les résultats de l'application de la fonction à chaque élément de l'array d'origine, sans modifier l'array d'origine.

Voici comment vous pouvez utiliser la fonction map() en JavaScript :

   // Définir un tableau
   const numbers = [1, 2, 3, 4, 5];

   // Utiliser la fonction map pour multiplier chaque élément par 2
   const doubledNumbers = numbers.map(function(num) {
      return num * 2;
   });

   console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

Dans cet exemple, la fonction que nous passons à map() prend un élément du tableau (num) comme argument et retourne le résultat de la multiplication de cet élément par 2. La fonction map() exécute cette fonction pour chaque élément du tableau numbers et crée un nouveau tableau doubledNumbers contenant les résultats.

Vous pouvez également utiliser des fonctions fléchées pour rendre le code plus succinct :


   const numbers = [1, 2, 3, 4, 5];

   const doubledNumbers = numbers.map(num => num * 2);

   console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

Ce code fait la même chose que l'exemple précédent, mais utilise une fonction fléchée à la place d'une fonction anonyme.


Ce code nous la racine carre de chaque element d'un tableau

   const numbers = [1, 4, 9];
   const roots = numbers.map((num) => Math.sqrt(num));

   // le premier tableau     [1, 2, 3]
   // les elements du 1er tableau au carre [1, 4, 9]

# Reformater un object utilisant map() array function in JS

   const kvArray = [
   { key: 1, value: 10 },
   { key: 2, value: 20 },
   { key: 3, value: 30 },
   ];

   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

   console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
   console.log(kvArray);
   // [
   //   { key: 1, value: 10 },
   //   { key: 2, value: 20 },
   //   { key: 3, value: 30 }
   // ]

# Utiliser parseInt() avec map()
