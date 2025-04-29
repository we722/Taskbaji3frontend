
let correctAnswer = 0;
let points = 0;

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let question = `${num1} ${operator} ${num2}`;

  if (operator === "/" && num2 === 0) {
    return generateCaptcha();
  }

  switch (operator) {
    case "+": correctAnswer = num1 + num2; break;
    case "-": correctAnswer = num1 - num2; break;
    case "*": correctAnswer = num1 * num2; break;
    case "/": correctAnswer = parseFloat((num1 / num2).toFixed(2)); break;
  }

  document.getElementById("captcha-question").innerText = question;
}

function submitAnswer() {
  const userAnswer = parseFloat(document.getElementById("captcha-answer").value);
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    points += 1;
    feedback.innerText = "সঠিক উত্তর! আপনি ১ পয়েন্ট পেলেন।";
  } else {
    feedback.innerText = `ভুল উত্তর! সঠিক উত্তর ছিল: ${correctAnswer}`;
  }

  const inr = (points * 0.04).toFixed(2);
  document.getElementById("points").innerText = `${inr}`;
  document.getElementById("captcha-answer").value = "";
  generateCaptcha();
}

window.onload = generateCaptcha;
