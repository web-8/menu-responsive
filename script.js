console.log('connecté'); 

// Je sélectionne et je stocke
// l'icône de navigation responsive
const icone = document.querySelector('.navbar-mobile i'); 
console.log(icone); //je verifie

// la DIV modal
const modal = document.querySelector('.modal'); 
console.log(modal); //je verifie

icone.addEventListener('click', function(){ //je donne l'action à l'icone
    console.log("icone cliquée"); //je verifie
    modal.classList.toggle('change-modal'); //ici c'est une action reversible donc j'utilise classList.toggle
    icone.classList.toggle('fa-times'); //ici pour l'icone devienne une croix
}); 

