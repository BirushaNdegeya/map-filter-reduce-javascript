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

Il est courant d'utiliser le rappel avec un argument (l'élément en cours de parcours). Certaines fonctions sont également couramment utilisées avec un seul argument, même si elles prennent des arguments optionnels supplémentaires. Ces habitudes peuvent entraîner des comportements confus. Considérez :

      ["1", "2", "3"].map(parseInt);

Pour resoudre ce probleme et transformer les elements en int

      ["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]

      console.log(["1", "2", "3"].map(Number));

      // Il convertit les elements du tableau en integer


# Parcourrer un tableau qui contient les undefined

      const numbers = [1, 2, 3, 4];
      const filteredNumbers = numbers.map((num, index) => {
      if (index < 3) {
      return num;
      }
      });

      // index goes from 0, so the filterNumbers are 1,2,3 and undefined.
      // filteredNumbers is [1, 2, 3, undefined]
      // numbers is still [1, 2, 3, 4]

# Side-effectful mapping

Le call back de side effect pour un variable

      const cart = [5, 15, 25];
      let total = 0;
      const withTax = cart.map((cost) => {
      total += cost;
      return cost * 1.2;
      });
      console.log(withTax); // [6, 18, 30]
      console.log(total); // 45

Le moyen performant de faire ce genre d'operation c'est utiliser le reduce methode pour eviter de faire un boucle deux fois

      const cart = [5, 15, 25];
      const total = cart.reduce((acc, cost) => acc + cost, 0);
      const withTax = cart.map((cost) => cost * 1.2);

      console.log(total);
      console.log(withTax);


### REDUCE METHOD IN JAVASCRIPT


La méthode reduce() en JavaScript est utilisée pour réduire un tableau (ou un autre type d'itérable) en une seule valeur. Elle applique une fonction de rappel sur chaque élément du tableau en cumulant les résultats pour produire une seule valeur de retour.

Voici quelques raisons courantes d'utiliser la méthode reduce() :

1. Réduction de données : Vous pouvez utiliser reduce() pour agréger ou combiner des données d'un tableau en une seule valeur. Par exemple, vous pouvez l'utiliser pour calculer la somme, la moyenne, le produit, ou toute autre opération basée sur les éléments du tableau.

2. Flexibilité : La méthode reduce() est très flexible car vous pouvez spécifier une fonction de rappel qui peut réaliser pratiquement n'importe quelle opération sur les éléments du tableau. Cela inclut la manipulation des types de données, la transformation des données, ou même la construction de structures de données complexes.

3. Code concis et lisible : L'utilisation de reduce() peut rendre votre code plus concis et plus lisible lorsqu'il s'agit de manipuler des tableaux et d'effectuer des opérations réduites sur leurs éléments. Cela peut éviter l'encombrement du code avec des boucles for ou des boucles while.

4. Performances : Dans certains cas, l'utilisation de reduce() peut offrir des performances meilleures ou équivalentes à celles obtenues avec d'autres méthodes de parcours de tableau. Cependant, cela dépend souvent du contexte et de la manière dont la fonction de rappel est implémentée.

Voici un exemple simple illustrant l'utilisation de reduce() pour calculer la somme des éléments d'un tableau :

      const numbers = [1, 2, 3, 4, 5];

      const sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
      }, 0);

      console.log(sum); // Affiche : 15


## 

Copyright BIRUSHA Francoise RADJABU Prosper 2024
