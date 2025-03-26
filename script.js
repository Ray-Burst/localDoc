

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties:0
};


// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };
// }

updateScoreElement()

console.log(score);

function getRandomElement(arr) {  
  const randomIndex = Math.floor(Math.random() * arr.length);  
  return arr[randomIndex];  
}  



function winner(myChoice){

//genarate computer Choices
let array=['rock', 'paper', 'scissors'];
let compChoice=getRandomElement(array);


//genarate result and give to gameResult
let result='';


//calculate winner
  if(compChoice===myChoice){
     result="Tie";
  } else{

      if(myChoice==='rock'&& compChoice==='scissors'){
        result='You Win';
      } else if(myChoice === 'paper' && compChoice==='rock'){
        result='You Win';
      } else if(myChoice === 'scissors' && compChoice === 'paper'){
        result='You Win';
      } else{
        result='You Lose';
      }
  }

  if (result === 'You Win') {
    score.wins++;
  } else if (result === 'You Lose') {
    score.losses++;
  } else {
    score.ties++;
  }

  updateScoreElement()

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = `${result}`

  let myMove = '';
  if (myChoice === 'rock') {
    myMove = '✊';
  } else if (myChoice === 'paper') {
    myMove = '🖐';
  } else {
    myMove = '✌';
  }

  let comMove = '';
  if (compChoice=== 'rock') {
    comMove = '✊';
  } else if (compChoice === 'paper') {
    comMove = '🖐';
  } else {
    comMove = '✌';
  }
  
  document.querySelector('.js-moves').innerHTML = `You  ${myMove}  ${comMove} Computer`;
  
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
  document.querySelector('.js-moves').innerHTML = '';
  document.querySelector('.js-result').innerHTML = '';
}

let intervalId;

function autoPlay() {
  let array = ['rock', 'paper', 'scissors'];
  intervalId = setInterval(() => {
    winner(getRandomElement(array));
  }, 3000)
  
  
}

function stopAutoPlay() {
  clearInterval(intervalId);
}
