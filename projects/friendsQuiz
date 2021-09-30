 
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
  {question: "Which character has a twin? (Racheal or Phoebe) ", answer: "Phoebe"},
  {question: "How many sisters does Joey have ? (6 or 7) ", answer: "7"},
  {question: "What's the name of the dancer Joey lived with ? (Janine or Janice)", answer:"Janine"},
  {question: "What’s Phoebe’s sister’s name? (Ariel or Urshela)", answer: "Urshela"},
  {question: "Who got stuck in a pair of leather pants ? (Ross or Joey)", answer:"Ross"}]

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
  console.log(chalk.yellowBright("Current score: ",score=score+1));
  }
  else{
  console.log(wrong("Sorry you re wrong"));
  console.log(chalk.yellowBright("Current score: ",score=score-1));
  score=score-1;}
  console.log("--------------------");
  
}
console.log(chalk.whiteBright("\n\nHighest Score : "+highestScore));
checkHighScore();
console.log(chalk.yellowBright("Your Score : "+score));

function checkHighScore(){
if(score==highestScore)
console.log(chalk.cyanBright("Congratulations You made an high score!"));
}
