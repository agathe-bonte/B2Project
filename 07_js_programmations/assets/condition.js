const listeMots = ["Cerise", "Chat", "Crayon"]
let motsUtilisateur = prompt("Entrez le mot " + listeMots[0])
let score = 0

if(motsUtilisateur === listeMots[0]){
    score +=1
    console.log('Bravo ' + score)
} 

motsUtilisateur = prompt("Entrez le mot " + listeMots[1])
if(motsUtilisateur === listeMots[1]){
    score +=1
    console.log('Bravo ' + score)
} 

motsUtilisateur = prompt("Entrez le mot " + listeMots[2])
if(motsUtilisateur === listeMots[2]){
    score +=1
    console.log('Bravo ' + score)
} 