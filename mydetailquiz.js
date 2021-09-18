var readlinSync = require("readline-sync");
var score = 0;

console.log("Hii friend welcome to quiz")

function play(question, answer)  {
  var userAnswer = readlinSync.question(question)
  if (userAnswer === answer) {
    console.log("mauj gardiye bro");
    score = score + 1;
    console.log("your score  " + score);
    }
else {
  console.log("yehi dosti itna hi jante ho ");
}
}

play("1.which is my favorite bike? ", "royal enfield")
play("2.my favorite programming language? ", "javascript")
play("3.my favorite movie? ", "avengerendgame")
play("4.how many girls as friend ", "0")

  if (score <= 3) {
    console.log("bhai dil tod diya tumne");
 
  
  } 
  else console.log("jio mere sher");


