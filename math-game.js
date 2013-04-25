var answer, question, numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100
];


function getRandom() {
  var random = Math.floor((Math.random()*20)+1)
  return numbers[random] || 0
}

function newProblem() {
  var first = getRandom()
    , second = getRandom();
  question = first + "+" + second + "=";
  answer = first + second;
  writeQuestion();
}

function writeQuestion() {
  process.stdout.write(question);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
newProblem();

process.stdin.on('data', function(chunk) {
  if(chunk.trim() === answer.toString()) {
    process.stdin.write("That is right!!!!\n\n")
    newProblem();
  } else {
    writeQuestion();
  }
});
