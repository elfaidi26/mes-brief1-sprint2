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

function afficher() {
  
  produits.forEach(function (produit) {
    const Produit = document.createElement("li");
    Produit.className = "produit";
    const div = document.createElement("div");
    const Nom = document.createElement("strong");
    Nom.classNamec = "nom-produit";
    Nom.textContent = produit.nom;
    const Prix = document.createElement("span");
    Prix.className = "prix-produit"
    Prix.textContent = produit.prix;
    div.append(Nom , Prix) ;
    const Btn = document.createElement("button");
    Btn.className = "supprimer";
    Btn.setAttribute("type" , "button");
    Btn.textContent = "Retirer";
    Produit.append(div,Btn);
    liste.append(Produit);
  })

}
afficher();