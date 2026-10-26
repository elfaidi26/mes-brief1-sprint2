// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.

const liste = document.querySelector("#liste-produits");

function Afficher() {
  
  produits.forEach(function (produit) {
    const modeleProduit = document.createElement("ul")
    const Produit = document.createElement("li")
    Produit.classList.add("Produit")
    const div = document.createElement("div")
    const nom = document.createElement("strong")
    nom.classList.add("nom-produit")
    nom.textContent = produit.nom
    const prix = document.createElement("span")
    prix.classList.add("prix-produit")
    prix.textContent = produit.prix  
    div.append(strong , span )
    li.append(div)


    

  })

}