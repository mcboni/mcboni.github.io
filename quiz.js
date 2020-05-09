const myQuizQuestions = [
  {
    question: 'Who is the president of the Federal Republic of Nigeria?',
    answers: [
      { text: 'Buhari', correct: true },
      { text: 'Fashola', correct: false }
    ]
  },
  {
    question: 'What is the radius of the eath?',
    answers: [
      { text: '6400km', correct: true },
      { text: '12800m', correct: false  },
      { text: '1.2e4km', correct: false  },
      { text: '2200000m', correct: false  }
    ]
  },
  {
    question: 'How many megabyte can be found in a gigabyte?',
    answers: [
      { text: '500', correct: false },
      { text: '1024', correct: true },
      { text: '1000', correct: false },
      { text: '1048', correct: false }
    ]
  },
  {
    question: 'An Acid and a Base reaction gives salt and ------  as its product?',
    answers: [
      { text: 'sulphur', correct: false },
      { text: 'water', correct: true },
      { text: 'citric acid', correct: false },
      { text: 'ethanol', correct: false }
    ]
  }
]



const startButton = document.getElementById('start-btn')
const EndButton = document.getElementById('end-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question-div')
const answerButtonsElement = document.getElementById('answer-section')

let RandomlySelectedQuestion, currentQuestionNumber,  score= 2;
EndButton.classList.add('hide')
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionNumber++
  showNextQuestion()
})
nextButton.addEventListener('click', showScore)

function startQuiz() {
  startButton.classList.add('hide')
  RandomlySelectedQuestion = myQuizQuestions.sort(() => Math.random() - .5)
  currentQuestionNumber = 0
  questionContainerElement.classList.remove('hide')
  showNextQuestion()
}

function showNextQuestion() {
  clearPreviousQustion()
  showQuestion(RandomlySelectedQuestion[currentQuestionNumber])
}

function showQuestion(question) {
 
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', chooseOption)
  
    answerButtonsElement.appendChild(button)
  })

}

function clearPreviousQustion() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function chooseOption(e) {
  const selectedButton = e.target
  Array.from(answerButtonsElement.children).forEach(button => {
    SetButtonStyle(button, button.dataset.correct)
    
  })
  if (RandomlySelectedQuestion.length > currentQuestionNumber + 1) {
    nextButton.classList.remove('hide')
  } else {
   
    EndButton.classList.remove('hide')
  }
  if(true===questions[0].answers[1].correct){
    score++
    document.getElementById('score').innerHTML=score;
  }else{
    score--
    document.getElementById('score').innerHTML=score;
  }
 
}
function showScore(){
  if(questions[0].answers[1].correct){
    score++
    document.getElementById('score').innerHTML=score;
  }
}





function SetButtonStyle(element, correct,showScore) {
  clearButtonStyle(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearButtonStyle(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

