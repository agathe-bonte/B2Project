const listFR = ["Cerise", "Chat", "Crayon"]
const listEN = ["Cherry", "Cat", "Pencil"]

let choixListUtilisateur
let messageResultat

function afficherResultat(score, motTotal){
    messageResultat = "Votre score est de"  + score + " sur " + motTotal
}

function choixList(){
    choixListUtilisateur = prompt('Veuillez choisir la liste : Français ou Anglais')
    //choisir une liste de mot
    while(choixListUtilisateur !== "Anglais" && choixListUtilisateur !== "Français"){
        choixListUtilisateur = prompt('Veuillez choisir la liste : Français ou Anglais')
    }
    return choixListUtilisateur
}

function lancerBoucleJeu(listeSelectionnee){
    let score = 0
    for(let i = 0; i < listeSelectionnee.length; i++){
        let motsUtilisateur = prompt("Entrez le mot " + listeSelectionnee[i])
        if(motsUtilisateur === listeSelectionnee[i]){
            score +=1
        } 
    }
    return score
}

function lancerJeu(){
    choixListUtilisateur = choixList()
    let score = 0
    if(choixListUtilisateur === "Anglais"){
        score = lancerBoucleJeu(listEN)
        console.log('Votre score est de '  + score + " sur " + listEN.length)
    }else{
        score = lancerBoucleJeu(listFR)
        console.log('Votre score est de '  + score + " sur " + listFR.length)
    }
}

lancerJeu()