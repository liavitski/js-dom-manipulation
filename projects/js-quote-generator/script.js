const quote = document.getElementById('quote');
const person = document.getElementById('author');
const btn = document.getElementById('new-quote');

const quotes = [
  {
    quote:
      '“No person can play the market all the time and win. There are times when you should be completely out of the market, for emotional as well as economic reasons.”',
    person: 'Jesse Livermore',
  },
  {
    quote: '“Be yourself; everyone else is already taken.”',
    person: 'Oscar Wilde',
  },
  {
    quote: '“So many books, so little time.”',
    person: 'Frank Zappa',
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
