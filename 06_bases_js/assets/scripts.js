/* LES VARIABLES */

let monAge = 34;
console.log(monAge);

const monPrenom = "Agathe";
console.log(monPrenom);

/* LES DONNÉES */
const typeString = "Bonte";
const typeNumber = 2;
const typeBolean = true;
console.log(typeof monPrenom);

/* OPÉRATEURS */

const prixCerise = 3;
const prixFraise = 4;
const prixTotalFruit = prixCerise + prixFraise; 
console.log(prixTotalFruit);

let nbLivre = 100;
nbLivre = nbLivre + 2;
console.log(nbLivre);

let nbPlaces = 200;
nbPlaces += 100;
console.log(nbPlaces);


let maisonVendues = 100;
maisonVendues -=2;
console.log(maisonVendues);

let nbPommes = 6;
nbPommes *=2;
console.log(nbPommes);

/* CONCATENATION */

let prenom = "Agathe ";
let nom = "Bonte";
let nomComplet = prenom + nom;
console.log(nomComplet)

let punchline = "Mon nom est bond";
punchline += " James Bond";
console.log(punchline);


/* Booleens */
let inscrit = false

/* Types’ de données */
let inscriptions = "100"
inscriptions += "10"
console.log(inscriptions)

inscriptions = Number("100")
inscriptions += 10
console.log(inscriptions)

let totalPlaces = 30
totalPlaces += 3
totalPlaces -= 2
totalPlaces +=1
let affichageTotalPlaces = "Il faudra "
affichageTotalPlaces += totalPlaces
affichageTotalPlaces += " places dans le bus"
console.log(affichageTotalPlaces);

/* les objets */

let champion = { 
    nom: "Marchand", 
    prenom: "Leon", 
    age: 23, 
    sport: "natation"
}
console.log(champion.nom + ' ' + champion.prenom)

//créez une variable pour récupérer une propriété
const nomDeMonChampion = champion.nom
console.log(nomDeMonChampion)


//ajouter une propriété à l'objet
champion.nationnalite = "Française"
console.log(champion)

let seanceJO = {
    sport : "natation",
    heure : "9h00",
    salle : "Plaine Saulnier"
}

const nomUtilisateur = "Agathe"

console.log(seanceJO)
console.log(nomUtilisateur)

//afficher le message Bonjour nomUtilisateur 
let messageNotification = "Bonjour " + nomUtilisateur + " votre séance de " + seanceJO.sport + " commence à " + seanceJO.heure
console.log(messageNotification)

/* Les tableaux */

let signeAstro = ["Capricorne", "Verseau", "Poisson" ]


const monSigneAstro = "Sagitttaire"
const signeCompatible = "Balance"

const duoAstro = [monSigneAstro , signeCompatible]
console.log("Voici 2 signes compatibles : " + duoAstro)

//connaitre la longueur d'un tableau
const nbsignesCompatibles = duoAstro.length
console.log(nbsignesCompatibles)

//accéder à un élément du tableau
const monSigneAstroCompatible = duoAstro[1]
console.log(monSigneAstroCompatible)

//ajouter à un élément du tableau
duoAstro.push("Lion")
console.log(duoAstro)

//supprimer un élément du tableau
duoAstro.pop()
console.log(duoAstro)

