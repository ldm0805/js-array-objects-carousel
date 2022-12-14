//funzione per andare avanti con le immagini
function goToNextSlide(){

    if (itemActive < superhero.length -1) {

    // Rimuovo la classe active

    items[itemActive].classList.remove('active');
    
    circles[itemActive].classList.remove('active');
    
    thumbnails[itemActive].classList.remove('active');

    //incremento il suo valore di 1

    ++itemActive;

    // Aggiungo la classe active

    items[itemActive].classList.add('active');

    circles[itemActive].classList.add('active');

    thumbnails[itemActive].classList.add('active');

    }   
    
 else {

    // Rimuovo la classe active

    items[itemActive].classList.remove('active');

    circles[itemActive].classList.remove('active');

    thumbnails[itemActive].classList.remove('active')
    
    //assegno ad itemActive 0

    itemActive = 0;

    // Aggiungo la classe active 

    items[itemActive].classList.add('active');

    circles[itemActive].classList.add('active');

    thumbnails[itemActive].classList.add('active');
        }
}

function goToPrevSlide(){

    //verifico l'elemento attivo (itemActive)

    if (itemActive > 0) {

    // Rimuovo la classe active

    items[itemActive].classList.remove('active');

    circles[itemActive].classList.remove('active');

    thumbnails[itemActive].classList.remove('active');

    //decremento il suo valore di 1
    
    itemActive--;

    // Aggiungo la classe active

    items[itemActive].classList.add('active');

    circles[itemActive].classList.add('active');

    thumbnails[itemActive].classList.add('active')
}

else {

    // Rimuovo la classe active

    items[itemActive].classList.remove('active');

    circles[itemActive].classList.remove('active');

    thumbnails[itemActive].classList.remove('active');
    
    //incremento il suo valore di 1

    itemActive = superhero.length-1;
    
    // Aggiungo la classe active

    items[itemActive].classList.add('active');
    
    circles[itemActive].classList.add('active');

    thumbnails[itemActive].classList.add('active');
}
}

//Array di oggetti

let superhero = [
    {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },

    {
    image: "./img/02.webp",
    title: "Ratchet And Clank",
    description: "Ratchet & Clank ?? una serie di videogiochi platform-adventure sviluppati da Insomniac Games e pubblicati da Sony Computer Entertainment.",
    },

    {
    image: "./img/03.webp",
    title: "Fortnine",
    description: "Fortnite ?? un gioco di Battaglia reale free-to-play con numerose modalit?? per ogni tipo di giocatore. Guarda un concerto, costruisci un'isola o combatti.",
    },

    {
    image: "./img/04.webp",
    title: "Stray cat",
    description: "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city. Stray is a third-person cat adventure game ...",
    },

    {
    image: "./img/05.webp",
    title: "Avengers",
    description: "Marvel's Avengers vanta un sistema di equipaggiamento che permette di personalizzare gli Avenger in base al tuo stile di gioco. Indossa i tuoi costumi preferiti.",
    }
]


//superhero.forEach((elem) => console.log(`${elem.image} - ${elem.title} - ${elem.description}`))

let itemsContent = '';
let itemsThumbnails = '';

superhero.forEach((elem) => {
    itemsContent += `<div class="item">
        <img src="${elem.image}">
        <div class="desc text-white">
            <h2>${elem.title}</h2>
            <p>${elem.description}</p>
        </div>
    </div>`
    itemsThumbnails += `<div class="thumb"><img src="${elem.image}"></div>`
});

const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const thumbnails = document.getElementsByClassName('thumb');

const thumbnailsPreview = document.querySelector('.thumbnails')
thumbnailsPreview.innerHTML += itemsThumbnails;


//Prendiamo la prima immagine dell'array e la rendiamo attiva

//Array items
const items = document.getElementsByClassName('item');

//Indice degli array
let itemActive = 0;

items[itemActive].classList.add('active');

//Array circles
const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

//Click sulle immagini 
for( let i=0; i < thumbnails.length; i++){
    let thumb = thumbnails[i];
    console.log(thumb)
    thumb.addEventListener('click', function(){

    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    thumbnails[itemActive].classList.remove('active');

    itemActive = i

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    })
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//slider indietro
next.addEventListener('click', goToPrevSlide);

//slider avanti
prev.addEventListener('click', goToNextSlide);

//Richiamo alla funzione per il carosello automatico

function autoCarusel(){       
     goToNextSlide()
}

function autoCaruselPrev(){       
    goToPrevSlide()
}


//  Intervallo per far partire il carosello al caricamento della pagina
 let myInterval = setInterval(autoCarusel, 3000);

// creazione dei pulsanti per avviare o stoppare il carosello in avanti
const play_button = document.getElementById("play");

play_button.addEventListener('click', function(){
    clearInterval(myInterval);
    myInterval = setInterval(autoCarusel, 3000);
})

// creazione dei pulsanti per avviare o stoppare il carosello in reverse
const play_button_reverse = document.getElementById("reverse");

play_button_reverse.addEventListener('click', function(){
    clearInterval(myInterval);
    myInterval = setInterval(autoCaruselPrev, 3000);
})

// Tasto pausa
const pause_button = document.getElementById("pause")

pause_button.addEventListener('click', function(){
    clearInterval(myInterval);
})

