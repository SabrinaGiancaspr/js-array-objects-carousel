// console.log('Carosello Array di Oggetti')

const images = [
  {
    image: 'img/01.webp',
    title: "Marvel's Spiderman Miles Morale",
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
]

//recupero container del carosello dal DOM
const containerDomElement = document.querySelector('.carousel-container');
//lunghezza array
console.log(images.length);

//creare ciclo for 0 < images.length (5) fin quando è minore il ciclo continua 
for (let i = 0; i < images.length; i++) {
  // console.log(i)
  //assegno variabile per definire corrente img
  let currentImg = images[i]
  console.log(currentImg);

  // creo un template literal che sovrascrive il mio contenuto html aggiungengo anche una classe per le mie img
  const htmlString = `
  <div class="carousel-item">
    <img src="${currentImg.image}" alt="${currentImg.title}">
    <h2>${currentImg.title}</h2>
    <p>${currentImg.text}</p>
  </div>
`;

  console.log(htmlString);
  containerDomElement.innerHTML += htmlString; // aggiungo contenuto al mio inner html
}

//assegno variabile per le img e le recupero dal DOM  
const itemDOMElements = document.querySelectorAll('.carousel-item')
console.log(itemDOMElements)

//creare variabile 
let imgActive = 0 //- assegnare variabile attiva partendo da zero (prima immagine)

//alla prima img bisogna aggiungere la classe active
let currentPic = itemDOMElements[imgActive]
currentPic.classList.add('active');

//recupero bottoni DOM 
const buttonNextDomElement = document.querySelector('.next-button');
const buttonPrevDomElement = document.querySelector('.prev-button');

//click bottoni 
buttonNextDomElement.addEventListener('click', function () {
  console.log('click next')
  itemDOMElements[imgActive].classList.remove('active');  // prima rimuovo la classe attiva alla img
  imgActive++; //incremento per selezionare l'img successiva
  if (imgActive === images.length) { //la mia img attiva è uguale alla lunghezza del mio array
    imgActive = 0 //non si interrmpe torna alla prima 
  }
  itemDOMElements[imgActive].classList.add('active'); //aggiungo all'altra img la classe active
})

buttonPrevDomElement.addEventListener('click', function () { //qui al contrario 
  console.log('click prev')
  itemDOMElements[imgActive].classList.remove('active'); //click bottoni prima rimuovo la classe attiva alla img
  imgActive--; //decrementare per selezionare l'img precedente
  if (imgActive < 0) { //Questa è una condizione che verifica se il valore della variabile è minore di zero
    imgActive = images.length - 1 //se l'utente continua a premere il pulsante "precedente" quando si è già visualizzata la prima immagine, la variabile imgActive tornerà a puntare all'ultima immagine dell'array, consentendo una navigazione circolare all'indietro
  }
  itemDOMElements[imgActive].classList.add('active');
})