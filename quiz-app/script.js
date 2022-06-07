const quizData = [
  {
    question: "How many months are there in a year?",
    a: 2,
    b: 6,
    c: 10,
    d: 12,
    correct: "d",
  },
  {
    question: "How many hours in a day?",
    a: 3,
    b: 12,
    c: 24,
    d: 48,
    correct: "c",
  },
  {
    question: "How many minutes in an hour?",
    a: 120,
    b: 48,
    c: 60,
    d: 12,
    correct: "c",
  },
  {
    question: "BTS debut in which date?",
    a: "13/06/2013",
    b: "03/12/2002",
    c: "24/12/2020",
    d: "26/09/1974",
    correct: "a",
  },
  {
    question: "Which date is the Vietnam Independence Day?",
    a: "April 30th",
    b: "September 2th",
    c: "May 1st",
    d: "December 20th",
    correct: "b",
  },
];

const questionEle = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answer_list = document.getElementById("answers");

let index = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  currQuizData = quizData[index];
  questionEle.innerHTML = currQuizData.question;
  a_text.innerText = currQuizData.a;
  b_text.innerText = currQuizData.b;
  c_text.innerText = currQuizData.c;
  d_text.innerText = currQuizData.d;
}

function deselectAnswer() {
  const answerEleList = document.querySelectorAll(".answer");
  answerEleList.forEach((answerEle) => {
    if (answerEle.checked) {
      answerEle.checked = false;
      return;
    }
  });
}

function getSelected() {
  const answerEleList = document.querySelectorAll(".answer");
  let answer = undefined;
  answerEleList.forEach((answerEle) => {
    if (answerEle.checked) {
      answer = answerEle.id;
      return;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  // console.log(index, answer, quizData[index].correct);
  if (answer) {
    if (answer === quizData[index].correct) {
      score++;
    }
    index++;
    if (index < quizData.length) {
      loadQuiz();
    } else {
      questionEle.innerHTML = `You finished with ${score}/${quizData.length} correct answers!`;
      answer_list.remove();
      submitBtn.innerHTML = "Reload!";
      submitBtn.setAttribute("onclick", "location.reload()");
    }
  }
});
