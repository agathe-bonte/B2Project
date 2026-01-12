let sectionCards = document.getElementById('sectionCards')
let btnDarkmode = document.querySelector('.js-btnDarkmode')

console.log(btnDarkmode)
console.log(sectionCards)




btnDarkmode.addEventListener('click', function(){
    if(sectionCards.classList[0] === "is-dark"){
        sectionCards.classList.remove('is-dark')
    }else{
        sectionCards.classList.add('is-dark')
    }
})




 











