const quote_space = document.getElementById('quote');
const character_space = document.getElementById('character');
const anime_space = document.getElementById('anime');
const quote_btn = document.getElementById('quote_btn');


function getRandomQuote(){

  $("#textcontent").fadeOut(500);

  fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
    quote_space.innerHTML = `${quote.quote}`
    character_space.innerHTML = `~ ${quote.character}`
    anime_space.innerHTML = `${quote.anime}`
  })

  $("#textcontent").fadeIn(1500);


}