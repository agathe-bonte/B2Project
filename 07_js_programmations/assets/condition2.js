console.log("Hello")






//les conditions
let motCorrect = true

if(motCorrect){
    console.log("Bravo, le mot est correct")
}else{
    console.log("Le mot est incorrecte")
}

const mot = "Chat"
let motUtilisateur = prompt('Entrez le mot ' + mot)

if(motUtilisateur === mot){
    console.log("Bravo le mot est correct")
}else{
    console.log("Le mot est incorrect")
}

/* Les Operateur */
if( 5 >= 3 ){
    console.log("Si le chiffre est supérieur ou égale à 3")
}

if(motUtilisateur !== mot){
    console.log("Le mot est incorrect")
}else{
    console.log("Le mot est correct")
}

//tester une liste de mots
const listeMots = ["Cerise", "Banane", "Fraise"]
let score = 0
let motsUtilisateur = prompt("Entrer le mot " + listeMots[0])

if(motsUtilisateur === listeMots[0]){
    score +=1
}

motsUtilisateur = prompt("Entrer le mot " + listeMots[1])
if(motsUtilisateur === listeMots[1]){
    score +=1
}
motsUtilisateur = prompt("Entrer le mot " + listeMots[2])
if(motsUtilisateur === listeMots[2]){
    score +=1
}

console.log("Votre score est de " + score)
