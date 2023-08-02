console.log(document.querySelector('.player').classList.remove('player--1'));
//Removes the class called "player--1"

console.log(document.querySelector('.player').classList.add('player--1'));
//Adds the class called "player--1"

console.log(document.querySelector('.player').classList.contains('player--1'));
// Checks if the element has the class "player--1"

console.log(
  document.querySelector('.player').classList.replace('player--1', 'player--2')
);
// Replaces class "player--1" with class "player--2"

console.log(document.querySelector('.player').classList.toggle('player--1'));
// If the element already has the class "player--1", it is removed, if it hasn't, the class will be added.
