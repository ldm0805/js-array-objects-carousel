let superhero = [
    {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
    {
    image: "./img/02.webp",
    title: "Ratchet And Clank",
    description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",

    },
    {
    image: "./img/03.webp",
    title: "Fortnine",
    description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",

    },
    {
    image: "./img/04.webp",
    title: "Stray cat",
    escription: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",

    },
    {
    image: "./img/05.webp",
    title: "Avengers",
    description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
]
console.log(superhero)

superhero.forEach((elem) => console.log(`${elem.image} - ${elem.title} - ${elem.description}`))

let itemsContent = '';

superhero.forEach((elem) => {
    itemsContent += `<div class="item">
    <img src="${elem.image}"
    <p>Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.</p>
    </div>`
});
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

console.log(superhero.forEach)