//funzione per andare avanti con le immagini
function goToNextSlide(){
    if (itemActive < superhero.length -1){

        //rimuovo la classe active al nuovo elemento dell'array items 
        items[itemActive].classList.remove('active');
        
        //rimuovo la classe active al nuovo elemento dell'array circle 
        circles[itemActive].classList.remove('active');
    
        //incremento il suo valore di 1
        ++itemActive;

        //aggiungo la classe active al nuovo elemento dell'array items
        items[itemActive].classList.add('active');

       //aggiungo la classe active al nuovo elemento dell'array circle
        circles[itemActive].classList.add('active');
        }   
    
    else{
        //rimuovo la classe active al nuovo elemento dell'array items 
        items[itemActive].classList.remove('active');

        //rimuovo la classe active al nuovo elemento dell'array circle 
        circles[itemActive].classList.remove('active');
    
        //assegno ad itemActive 0
        itemActive = 0;

        //aggiungo la classe active al nuovo elemento dell'array items
        items[itemActive].classList.add('active');

        //aggiungo la classe active al nuovo elemento dell'array circle
        circles[itemActive].classList.add('active');
        }
}



let superhero = [
    {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
    {
    image: "./img/02.webp",
    title: "Ratchet And Clank",
    description: "Ratchet & Clank è una serie di videogiochi platform-adventure sviluppati da Insomniac Games e pubblicati da Sony Computer Entertainment.",

    },
    {
    image: "./img/03.webp",
    title: "Fortnine",
    description: "Fortnite è un gioco di Battaglia reale free-to-play con numerose modalità per ogni tipo di giocatore. Guarda un concerto, costruisci un'isola o combatti.",

    },
    {
    image: "./img/04.webp",
    title: "Stray cat",
    description: "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city. Stray is a third-person cat adventure game ...",

    },
    {
    image: "./img/05.webp",
    title: "Avengers",
    description: "Marvel's Avengers vanta un sistema di equipaggiamento che permette di personalizzare gli Avenger in base al tuo stile di gioco. Indossa i tuoi costumi preferiti ",
    },
]
console.log(superhero)

superhero.forEach((elem) => console.log(`${elem.image} - ${elem.title} - ${elem.description}`))

let itemsContent = '';

superhero.forEach((elem) => {
    itemsContent += `<div class="item">
    <img src="${elem.image}">
    <div class="desc text-white">
    <h2>${elem.title}</h2>
    <p>${elem.description}</p>
    </div>
    </div>`
});

const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

console.log(superhero.forEach)


//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA
//Array items
const items = document.getElementsByClassName('item');
//Indice degli array
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione
//Array circles
const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//slider avanti
next.addEventListener('click', goToNextSlide);

// slider indietro
prev.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    if (itemActive > 0){

        //rimuovo la classe active al nuovo elemento dell'array items 
        items[itemActive].classList.remove('active');

        //rimuovo la classe active al nuovo elemento dell'array circle 
        circles[itemActive].classList.remove('active');
    
        //decremento il suo valore di 1
        itemActive--;

        //aggiungo la classe active al nuovo elemento dell'array items
        items[itemActive].classList.add('active');

        //aggiungo la classe active al nuovo elemento dell'array circle
        circles[itemActive].classList.add('active');
    }

    else{

        //rimuovo la classe active al nuovo elemento dell'array items 
        items[itemActive].classList.remove('active');

        //rimuovo la classe active al nuovo elemento dell'array circle 
        circles[itemActive].classList.remove('active');
        
        //incremento il suo valore di 1
        itemActive = superhero.length-1;
        
        //aggiungo la classe active al nuovo elemento dell'array items
        items[itemActive].classList.add('active');
        
        //aggiungo la classe active al nuovo elemento dell'array circle
        circles[itemActive].classList.add('active');
    }
})


//Richiamo alla funzione per il carosello automatico

function autoCarusel(){       
     goToNextSlide()
}

//  Intervallo per far partire il carosello al caricamento della pagina
 let myInterval = setInterval(autoCarusel, 1300);

// creazione dei pulsanti per avviare o stoppare il carosello
const play_button = document.getElementById("play")
myInterval ;

play_button.addEventListener('click', function(){
    myInterval = setInterval(autoCarusel, 1300);
})

const pause_button = document.getElementById("pause")

pause_button.addEventListener('click', function(){
    clearInterval(myInterval);
})

