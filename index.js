// SELECTEURS
// document.querySelector('h4').style.background = 'green';
// const baliseHtml = document.querySelector('h4');
// console.log(baliseHtml);

// baliseHtml.style.background = 'purple';

// Click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

// console.log(response);

// questionContainer.addEventListener('événement', () => {});
questionContainer.addEventListener('click', () => {
  //   questionContainer.style.background = 'yellow';
  //   questionContainer.style.border = '3px solid red';
  questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
  //   response.style.visibility = 'visible';
  response.style.background = 'green';
  //   response.style.borderRadius = '10px';
  response.classList.add('show-response');
});

btn2.addEventListener('click', () => {
  //   response.style.visibility = 'visible';
  response.style.background = 'red';
  //   response.style.borderRadius = '10px';
  response.classList.add('show-response');
});

// ---------------------------------------------------------------------

// Mouse events
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
  mousemove.style.left = e.pageX + 'px';
  mousemove.style.top = e.pageY + 'px';
});

window.addEventListener('mousedown', () => {
  mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
});

window.addEventListener('mouseup', () => {
  mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
  mousemove.style.border = '2px solid teal';
});

questionContainer.addEventListener('mouseenter', () => {
  questionContainer.style.background = 'rgba(0, 0, 0, 0.6)';
});

questionContainer.addEventListener('mouseout', () => {
  questionContainer.style.background = 'orange';
});

response.addEventListener('mouseover', () => {
  response.style.transform = 'rotate(2deg)';
});

//-------------------------------------------------------
//KEYPRESS event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + '.mp3';
  audio.play();
  console.log(audio.src);
};

document.addEventListener('keypress', (e) => {
  key.textContent = e.key;

  if (e.key === 'a') {
    keypressContainer.style.background = 'orange';
  } else if (e.key === 'z') {
    keypressContainer.style.background = 'green';
  } else if (e.key === 'Enter') {
    keypressContainer.style.background = 'pink';
  } else {
    keypressContainer.style.background = 'purple';
  }

  if (e.key === 'a') {
    ring(e.key);
  }
});

//--------------------------------------------
// Scroll event

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = '-50%';
  }
});

//----------------------------------------------------
// Form events (input et submit etc....)
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
  pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
  language = e.target.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (cgv.checked) {
    // Affiche le contenu des variables
    document.querySelector(
      '.infos-form'
    ).innerHTML = `<h3>Le Pseudo : ${pseudo} </h3> a choisi :
     le langage <h4>${language} </h4> comme langage favoris`;
    console.log(
      `${pseudo} a choisi le langage ${language} comme langage favoris`
    );
  } else {
    alert('Veuillez accepter les CGV');
  }
});

// ----------------------------------------------------------------------

// load event : il se declenche une fois que toute la page a été

window.addEventListener('load', () => {
  console.log('Document chargé !!!!');
});

//--------------------------------------------------------------------------
// ForEach

// const boxes = document.getElementsByClassName('box');
// const boxes = document.querySelectorAll('.box');

// console.log(boxes);

// boxes.forEach((box) => {
//   box.addEventListener('click', (e) => {
//     e.target.style.transform = 'scale(0.8)'; // petit testttttt
//   });
// });

//-------------------------------------------------------------------------
// SetProperty
window.addEventListener('mousemove', (e) => {
  nav.style.setProperty('--x', e.layerX + 'px');
  nav.style.setProperty('--y', e.layerY + 'px');
});