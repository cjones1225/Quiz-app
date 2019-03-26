let questionNumber = 0;
let score = 0;

//generate question html
function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>Question ${questionNumber+1}: ${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}

//increment question number
function changeQuestionNumber () {
    questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}

//increment score
function changeScore () {
  score ++;
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz () {
  $('.quizStart').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
    activateCurrentQuestion();
});
}

// render question in DOM
function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}

//user selects answer on submit run user feedback
function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
  correct();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
  incorrect();
}
function activateCurrentQuestion () {
  let questionDot = questionNumber;
  let jsClass = ".js-q" + questionDot;
  let lastQuestion = ".js-q" + (questionDot - 1);
  $(jsClass).addClass("active");
  //if (questionNumber - 1).hasClass;
  $(lastQuestion).removeClass("active");
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  //let interestingFact = `${STORE[questionNumber].interestingFact}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"></div><p><b>You got it right!</b><br><span>"${STORE[questionNumber].interestingFact}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  //let interestingFact = `${STORE[questionNumber].interestingFact}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"></div><p><b>You got it wrong</b><br>the correct answer was <span>"${correctAnswer}. ${STORE[questionNumber].interestingFact}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
  changeScore();
  $('.score').text(score);
}
function correct () {
  let questionDot = questionNumber;
  let jsClass = ".js-q" + questionDot;
  $(jsClass).addClass("correct");
}

function incorrect () {
  let questionDot = questionNumber;
  let jsClass = ".js-q" + questionDot;
  $(jsClass).addClass("incorrect");
}

//when quiz is over this is the html for the page
function renderResults () {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><p>You got ${score} / 10</p><p>You really know Space!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><p>You got ${score} / 10</p><p>You know a good bit about space! But study up if you want to work in this field!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Better brush up on your knowledge of the great unknown!</h3><p>You got ${score} / 10</p><p>With some more studying and learning, you'll pass this quiz in no time</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
    activateCurrentQuestion();
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}
function restart() {
  location.reload();
}

//run quiz functions
function createQuiz () {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);
