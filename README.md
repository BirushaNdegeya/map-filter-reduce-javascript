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



## FILTER METHOD IN JAVASCRIPT


La méthode filter() en JavaScript est utilisée pour créer un nouveau tableau contenant uniquement les éléments d'un tableau d'origine qui satisfont à une condition spécifique définie dans une fonction de rappel. Cette méthode est particulièrement utile lorsque vous avez besoin de filtrer un ensemble de données en fonction de certains critères.

Voici quelques raisons courantes d'utiliser la méthode filter() :

1. Filtrage de données : Vous pouvez utiliser filter() pour extraire des éléments d'un tableau qui répondent à des critères spécifiques. Par exemple, vous pouvez filtrer les nombres pairs ou impairs, les éléments supérieurs à une certaine valeur, les chaînes de caractères qui commencent par une lettre particulière, etc.

2. Création de sous-ensembles de données : La méthode filter() vous permet de créer rapidement des sous-ensembles de données à partir d'un tableau d'origine. Cela peut être utile lorsque vous avez besoin de travailler uniquement avec une partie spécifique des données.

3. Code plus lisible et concis : Utiliser filter() peut rendre votre code plus lisible et concis, car il permet de spécifier la condition de filtrage de manière déclarative, sans nécessiter de boucles explicites.

4. Réduction des effets secondaires : L'utilisation de filter() peut contribuer à réduire les effets secondaires dans votre code, car elle crée un nouveau tableau plutôt que de modifier directement le tableau d'origine.

Voici un exemple simple illustrant l'utilisation de filter() pour filtrer les nombres pairs à partir d'un tableau :


      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const evenNumbers = numbers.filter((number) => {
      return number % 2 === 0;
      });

      console.log(evenNumbers); // Affiche : [2, 4, 6, 8, 10]


Dans cet exemple, la fonction de rappel passe en revue chaque élément du tableau numbers et renvoie true si l'élément est pair (c'est-à-dire s'il a un reste de 0 lorsqu'il est divisé par 2). La méthode filter() crée ensuite un nouveau tableau contenant uniquement les éléments pour lesquels la fonction de rappel retourne true.

      console.log('Hello world');
###


## HIGHER ORDER FUNCTIONS

un higher order function c'est une function qui comprend ca:
- Il prend une ou plusieurs functions comme argument(parametres)
- Il renvoie une fonction comme le resultat


# ANATOMIE DE CALL BACK

      const reseauxSociaux = ["Twitter", "LinkedIn", "Facebook", "instagram"];

      console.log(reseauxSociaux.__proto__);

# filter examples

      // Filter

      const mots = ["bonjour", "holla", "Bananes", "pommes", "goma"];

      const motFilter = mots.filter((mot) => mot.length > 6);

      console.log(motFilter);

      // Avoir les nombres pairs

      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const nombresPairs = numbers.filter((n) => {
      return n % 2 === 0;
      });

      console.log(nombresPairs);

      // La version courte

      const pairs = numbers.filter(n => n % 2 === 0);

      console.log(pairs);

      // La version a version avec for each

      let nomPairs = [];

      numbers.forEach((n) => {
      if (n % 2 === 0) {
            nomPairs.push(n);
      }
      });

      console.log(nomPairs);

Usines Examples

      const usines = [
      {nom: 'usine 1', category: 'Finance', debut: 1981, fin: 2004},
      {
            nom: 'usine 2', category: 'Vente', debut: 1992, fin: 2008,
      },
      {
            nom: 'usine 3', category: 'Auto', debut: 1999, fin: 2007,
      },
      {
            nom: 'usine 4', category: 'Vente', debut: 2009, fin: 2010,
      },
      {
            nom: 'usine 5', category: 'Technologie', debut: 2009, fin: 2014,
      },
      {
            nom: 'usine 6', category: 'Finance', debut: 1987, fin: 2010,
      },
      {
            nom: 'usine 7', category: 'Auto', debut: 1986, fin: 1996,
      },
      {
            nom: 'usine 8', category: 'Technologie', debut: 2011, fin: 2016,
      },
      {
            nom: 'usine 9', category: 'Vente', debut: 1981, fin: 1989
      }
      ];

      // 1. Avoir seulement les categories de vente

      const usineDeVente = usines.filter(us => us.category === 'Vente');
      console.log(usineDeVente);

      // 2. Avoir seulement les usines qui ont debute en ou apres 1980 et qui ont ferme en ou avant 2005

      const viellesUsines = usines.filter((us) => us.debut >= 1980 && us.fin <= 2005);

      console.log(viellesUsines);

      // Avoir les usines qui ont fait 10 ans ou plus

      const usineLongDuree = usines.filter((us) => (us.fin - us.debut >= 10));

      console.log(usineLongDuree);

# avec map


      // un tableau avec les noms de l'usine

      const nomsUsines = usines.map(us => us.nom);

      // category de l'usine

      const categoryUsine = usines.map((us) => (
      {
            nom: us.nom,
            category: us.category,
      }
      ))

      // Le temps que les usines ont duree dans un object de nom et annees

      const annees = usines.map((us) => ({
      nom: us.nom,
      duree: `${us.fin - us.debut} annees`,
      }))

      // chain Map method

      const racineAndDouble = nombres
      .map((n) => Math.sqrt(n))
      .map(sqrt => sqrt * 2)

      // Chain #ntes methodes

      const pairsDouble = nombres
      .filter((n) => n % 2 === 0)
      .map(nu => nu * 2)


# LIEN DES DONNES

- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/posts
- https://icanhazdadjoke.com/

      // workflow function

      const getAllUserEmails = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonUserData = await resp.json();

      const userEmailArray = jsonUserData.map((user) => {
            return user.email;
      });

      console.log(userEmailArray);
      }

      getAllUserEmails();

Autre method pour extraire les emails

      const getAllUserEmails = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonUserData = await resp.json();

      const userEmailArray = jsonUserData.map((user) => {
            return user.email;
      });

      return userEmailArray;
      }

      const emails = await getAllUserEmails();

      console.log(emails);

D'autres examples sur les fonctions map-filter-reduce

      const apiPosts = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
      return await resp.json();
      };
      const posts = await apiPosts();

      // filtrer les post
      // Filtrer le 100 post

      const filteredPosts = posts.filter(post => {
      return post.userId === 1;
      });

      console.log(filteredPosts);

      // Mapper tous les posts

      const mappedPosts = filteredPosts.map(post => {
      return post.id * 10;
      });

      console.log(mappedPosts);

      // Reduce

      const reducedPosts = mappedPosts.reduce((sum, total) => {
      return sum + total;
      });

      console.log(reducedPosts);

##

Le succès de notre projet GitHub, centré sur JavaScript, HTML et CSS, repose sur l'engagement, la persévérance et la créativité de notre équipe composée de Monsieur BIRUSHA NDEGEYA, Madame Francise, Monsieur RADJABU et Monsieur Prosper. Leur collaboration étroite a permis une communication fluide et une organisation efficace. Leur détermination et flexibilité ont favorisé l'innovation et le leadership, tandis que leur adaptabilité et compétence ont nourri notre passion pour l'excellence. L'empathie et le respect ont renforcé notre esprit d'équipe, tandis que la rigueur et l'auto-discipline ont guidé nos actions vers le succès, en utilisant les méthodes map, filter et reduce.

## 

Copyright BIRUSHA Francoise RADJABU Prosper 2024, Inc. Team       Privacy
