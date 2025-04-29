
let score = 0;
let inrRate = 0.04;

function generateQuestion() {
  const operators = ['+', '-', '*', '/'];
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let question = `${num1} ${operator} ${num2}`;
  let answer = eval(operator === '/' ? `${num1}/${num2}` : question);
  answer = operator === '/' ? parseFloat(answer.toFixed(2)) : answer;
  return { question, answer };
}

let currentQuestion = generateQuestion();
document.getElementById('question').innerText = currentQuestion.question;

document.getElementById('submit').addEventListener('click', () => {
  const userAnswer = parseFloat(document.getElementById('answer').value);
  if (userAnswer === currentQuestion.answer) {
    score++;
    document.getElementById('score').innerText = score;
    document.getElementById('inr').innerText = (score * inrRate).toFixed(2);
  }
  currentQuestion = generateQuestion();
  document.getElementById('question').innerText = currentQuestion.question;
  document.getElementById('answer').value = '';
});
