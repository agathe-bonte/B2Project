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

# Manipuler les booléens

En programmation vous aurez besoin de 2 types de données vrai/faux
le booléen a ainsi 2 valeur true/false pour savoir si l'était est vrai ou faux dans notre code

let inscrits = false

# Différencier les types de données

let inscriptions = "100"
inscriptions += "10"
la variable inscriptions va contenir "10010" et non 110 car la présence des guillemets signifie qu'il s'agit d'une chaine de caractères. Par conséquent le + n'est pas une opération mais une concaténation. 

POur résoudre ce problème il faut retirer les guillemets ou signaler à JS que nous souhaitons utiliser des nombres grâce à l'instruction Number qui permet de convertir le texte en chiffre. 

# Découvrir les objets

Un object javascript est un conteneur. 
Il est composée de propriétés qui ont chacune une valeur. Ainsi le type de donnée Object offre la possibilité de stocker plusieurs valeurs en une seule fois, plutôt que séparément dans plusieurs variables différentes. 

# Déclarer un Object

Pour déclarer une objet il vous devez ouvrir les accolades. à l'intérieur vous insérer les propriété par un nom et leur attribuer une valeur grâce au : les propriétés sont séparées par des virgules. 

Let champion = {
    nom : "Marchand", 
    prenom: "Leon", 
    age: 23, 
    sport: "natation"; 
}

# Ajouter une propriété à un objet

Un objet peut être mis à jour au fur et à mesure de son évolution dans le code. 
Si vous souhaitez lui ajouter une propriété. 

champion.loisir = "coder"

# Accéder à la propriété

Lorsque que vous manipulez les objets Js vous avez besoin d'accéder à leurs propriétés pour les stockers dans des variables et les utiliser dans la suite de votre code. 
Vous pourvez accéder à la valeur d'une propriété en utilisant le . et par exemple, la stocker dans une variable. 

const prenomChampionFavori = champion.prenom

# Découvrez les tableaux

Si vous manipulez des données similaires ou qui partagent la même thématique, il est préférable de les regrouper en tableaux. Cela vous permet de les regrouper en un seul endroit et de limiter le nombre de variables dans votre code. 

Pour déclarer un tableau en Js vous devez utiliser les crochets [] chaque valeur est séparée par une virgules

const monSigneAstro = "Sagitttaire"
let signesCompatibles = ["Poisson","Balance"]

tousLesSignesAstro = [monSigneAstro , signesCompatibles]

# Accéder à un élément du tableau

Pour connaître le nombre d'éléments que contient un tableau, vous devez accéder à la propriété length en utilsant le point . comme pour les objets. 

signesCompatibles.length

# Modifier un tableau avec PUSH

Pour ajouter un élément au tableau vous devez utiliser la methode push 

signesCompatibles.push("Lion")

Avec push la donnée sera ajoutée en dernier dans le tableau.

# Supprimer des données grâce à la methode POP

POur supprimer la dernière donnée de votre tableau, vous pouvez utiliser la methode pop sans avoir besoin de passer des valeurs. 

signesCompatibles.pop()

