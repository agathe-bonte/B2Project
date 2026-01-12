// Apprendre les boucles FOR
for(let compteur = 0 ; compteur < 10 ; compteur = compteur + 1 ){
    console.log(compteur)
}

const listFR = ["Cerise", "Chat", "Crayon"]
const listEN = ["Cherry", "Cat", "Pencil"]

let choixListUtilisateur = prompt('Veuillez choisir la liste : Français ou Anglais')

let score = 0

//choisir une liste de mot
while(choixListUtilisateur !== "Anglais" && choixListUtilisateur !== "Français"){
    choixListUtilisateur = prompt('Veuillez choisir la liste : Français ou Anglais')
}

//lancer boucle de jeu
if(choixListUtilisateur === "Anglais"){
    for(let i = 0; i < listEN.length; i++){
        let motsUtilisateur = prompt("Entrez le mot " + listEN[i])
        if(motsUtilisateur === listEN[i]){
            score +=1
            console.log('Bravo ' + score)
        } 
    } 
    console.log('Votre score est de '  + score + " sur " + listEN.length)
}else{
    for(let i = 0; i < listFR.length; i++){
        let motsUtilisateur = prompt("Entrez le mot " + listFR[i])
        if(motsUtilisateur === listFR[i]){
            score +=1
            console.log('Bravo ' + score)
        } 
    } 
    console.log('Votre score est de '  + score + " sur " + listEN.length)
}

