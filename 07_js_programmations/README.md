# Déclarer une variable en javascript

pour déclarer des variables, vous devez utiliser les instructions let et const

# L'instruction Let

let monAge = 34; 

je peux faire évoluer cette valeur en écrivant

monAge = 35; 

* je n'ai pas réécrit l'instruction let, car une fois déclarée je peux l'utiliser directement

# L'instruction Const

cont monPrenom = "Agathe"

* const signifie constante. Donc une fois déclaré, monPrenom ne pourra plus changer. Si on essaie javascript executera une erreur. En revanche monAge pourra évoluer grâce à Let. 

# L'instruction console.log()

Pour vérifier le resultat de notre code utiliser le console.log(nomDeMaVariable) 

# Coder proprement 

Veuillez à bien choisir le nom de vos variables pour que votre soit visible pour vous et pour les autres développeur. 

# Les différents types de données

En JS il existe plusieurs types pour décrire la valeur de la variable. En fonction des données, les opérations qui permettent de manipuler les données sont différentes. 

* string : pour les chaines de caractères (texte)
* number : pour les chiffres
* boolean : c'est à dire une valeur vraie(true) ou fausse(false)

# Utilisez les opérateurs

lorsqu'on utilise += on additionne la valeur à droite du signe = à notre variable. 
Nous pouvons l'utiliser pour les autres opérations mathématiques 

* les additions +=
* les soustractions *=
* les multipications -=
* les divisions /=

# Les chaines de caractères 

Pour déclarer une variable de type string nous devons l'entourer de guillemets simple ou double

cosnt firstname = 'John';
const lastname = "Doe;

Si on utilise + pour un string on fait une concaténation (mettre bout à bout)

