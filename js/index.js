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