// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.

// const sports = document.querySelectorAll('li');

// sports.forEach((sport) =>
//   sport.addEventListener('click', function (e) {
//     const target = e.target;

//     if (target.matches('li')) {
//       target.style.backgroundColor = 'grey';
//     }
//   })
// );

// const football = document.getElementById('football');
// const basketball = document.getElementById('basketball');
// const boxing = document.getElementById('boxing');
// const tennis = document.getElementById('tennis');
// const golf = document.getElementById('golf');

document.querySelector('#sports').addEventListener('click', function (e) {
  console.log(e.target.getAttribute('id') + ' is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey';
    console.log(target.previousElementSibling);
  }
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);