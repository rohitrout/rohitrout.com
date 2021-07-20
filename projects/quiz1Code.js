 
var readLineSync=require('readline-sync');
const chalk = require('chalk');

const quest=chalk.cyanBright.bold;
const right=chalk.green.bold;
const wrong=chalk.red.bold;
var score=0;
var highestScore=5;
var name=readLineSync.question(quest("Enter your Name: "));
console.log(chalk.yellow.bold("Hi "+name+" Do you know Rohit ?"));


var questions=[
  {question: "Do He like Ice-cream ? ", answer: "yes"},
  {question: "Where do he live ? ", answer: "chandil"},
  {question: "Do he like Chinese ? ", answer:"yes"},
  {question: "What series is he watching now ? ", answer: "bigbang"},
  {question: "What is his Last Name ? ", answer:"rout"}]

for(var i=0;i<questions.length;i++)
{
  var current=questions[i];
  play(current.question,current.answer);
}

function play(question,answer)
{
  var userAnswer = readLineSync.question(question);
  if(userAnswer===answer)
  {console.log(right("You re right"));
  score=score+1;
  }else{
  console.log(wrong("Sorry you re wrong"));
  score=score-1;}
  
}
console.log(chalk.whiteBright("\n\nHighest Score : "+highestScore));
checkHighScore();
console.log(chalk.yellowBright("Your Score : "+score));

function checkHighScore(){
if(score==highestScore)
console.log(chalk.cyanBright("Congratulations You made an high score!"));
}