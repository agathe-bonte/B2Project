#Qu'est ce que SASS? 
Sass est un préprocesseur CSS. Il ajoute des variables, mixins, fonctions, modules, boucles, etc., puis compile en CSS standard.

#Installation

# Installer NodeJS
version recente > 16
# initier npm dans notre projet
npm init -Y
# au choix en local dans un projet
npm i -D sass
# compilation ponctuelle
npm run sass
# surveiller les changements (recompile à chaque sauvegarde)
npm run sass --watch
# build production minifié
npm run build

#Structure d'un projet
abstract/
    _tokens.scss        // variables(design tockens) avec !default
    base/              // reset, typo..
    layout/           //  container, grid
    components/      // btn, card, modal
    utilities/      //  mixins + functions
    styles.scss.   //   point d'entrée


