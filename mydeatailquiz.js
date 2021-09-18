

var readlineSync = require("readline-sync");

var score = 0;
var totalScore = 6;

var userName = readlineSync.question("what is your name?   ")

console.log("welcome  " + userName)

var highScore = [{
  name: "nikhil",
  score: 5,
}, {
    name: "viru",
  score: 4,
}
  
]

function play(question, answer) {
var userAnswer = readlineSync.question(question);

 console.log("you entered => " + userAnswer);

if (userAnswer === answer) {
 console.log("you are right! ")
  score = score + 6;
  console.log("you won 2 point")
 }
 else {
  console.log("you are wrong! ")
  console.log("you won 0 point")
}
}


  
// play("what is your name?", "nikhil")

var questions = [{
  question: "1.Which day is celebrated as International Women’s Day?",
  answer: "8march"
}, {
  question: "2.Which day is celebrated as World Water Day?",
  answer: "22march"
}, {
  question: "3.Which day is celebrated as World Press Freedom Day ?",
  answer: "3may"
}
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
};
console.log("your high score => " + score)

for (var i = 0; i < highScore.length; i++) {
  console.log("top player")
  console.log(highScore[i])
}

for (var i = 0; i < score.lengh; i++) {
  console.log(score[i])
  if (i === 6) {
    console.log("congratulation you have made high score")
  }
}