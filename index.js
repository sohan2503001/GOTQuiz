var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question(chalk.cyan.bold("May I ask you what's your name 🖐 ? "));
console.log("  ");
console.log(chalk.blueBright.bold("Welcome 🙏  " + username));
console.log("  ");
console.log(chalk.blueBright.bold("Today we are going to see how much you know about GOT aka Game of Thrones 😁 "));
console.log("  ");

var score = 0;
var myscore = [
  { name: "John Snow", scor: "20" },
  { name: "Daenerys Targaryen", scor: "18" },
  { name: "Tyrion Lannister", scor: "16" },
  { name: "Arya Stark", scor: "14" }
]
//Scoreboard
console.log(chalk.yellowBright.bold("\n*****Check out Current Leaderboard*****"));
for (var k = 0; k < myscore.length; k++) {
  console.log(myscore[k].name + " ➜ " + myscore[k].scor);
}

console.log("  ");
console.log(chalk.yellowBright.bold("Type the correct option from options a,b,c to get highest score"));
console.log("  ");

function game(question, answer) {
  var solution = readlineSync.question(chalk.green(question));

  if (solution === answer) {
    console.log("You are Correct 🎉  👍 ");
    score = score + 2;
  } else {
    console.log("You are Wrong ‍ 👎  ");
    console.log(chalk.cyanBright("Correct answer is: ") + chalk.bgMagenta(answer));
    score = score + 0;
  }
  console.log(chalk.cyanBright("Total score: " + score));
  console.log("--------------------------");
}

var questions = [
  {
    question: "1.How did Daenerys Targaryen eventually hatch her dragon eggs?? \na.In a lightning storm \nb.In a fireplace \nc.In a funeral pyre \n",
    answer: "c"
  },

  {
    question: "2.The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:? \na.Valar Dohaeris or 'all men must serve' \nb.Valar Rohnas or 'all men must live' \nc.Valar GoGo or 'all men must dance' \n",
    answer: "a"
  },

  {
    question: "3.What is the only thing that can put out volatile Wildfire?? \na.Dragon's blood \nb.Water \nc.Sand \n",
    answer: "c"
  },

  {
    question: "4.Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?? \na.Lady \nb.Summer \nc.Nymeria \n",
    answer: "a"
  },

  {
    question: "5.Arya's punishment for stealing from the Many-Face God is:? \na.Death \nb.Memory Loss \nc.Blindness \n",
    answer: "c"
  },

  {
    question: "6.What was the name of Ned Stark's greatsword?? \na.Oathkeeper \nb.Ice \nc.Northguard \n",
    answer: "b"
  },

  {
    question: "7.Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:? \na.Knowledge of poisons \nb.Ruby-colored armor \nc.Nighttime attacks \n",
    answer: "a"
  },

  {
    question: "8.The Night King was created using a dagger made of:? \na.Valyrian Steel \nb.Blue Ice \nc.Dragonglass \n",
    answer: "c"
  },

  {
    question: "9.How many arrows does Ramsay Bolton let loose at Rickon Stark?? \na.Four \nb.one \nc.two \n",
    answer: "a"
  },

  {
    question: "10.Who created the secret tunnel in the sewers under Casterly Rock?? \na.Varys \nb.Jaime Lannister \nc.Tyrion Lannister \n",
    answer: "c"
  }
]

for (var i = 0; i < questions.length; i++) {
  var current = questions[i];
  game(current.question, current.answer);
}
console.log(chalk.bold.blueBright("Your final Score is: " + score));
console.log("   ");

//Comparing scores
  for(var j = 0; j<myscore.length ; j++){
    if(score == myscore[j].scor){
      j = j + 1;
      console.log(chalk.blueBright("🥳   Congratulations You have became the " + j + " highest scorer of game 🔥 & proved u are the biggest fan of GOT"));
      console.log("  ");
    console.log(chalk.blueBright("Thank you for playing these quiz we will update the scoreboard 🙌  😁 "));
    console.log("  ");
    }
  }
   if(score < myscore[3].scor ){
      console.log(chalk.blueBright("You should again watch and then play  😄"));
    }
