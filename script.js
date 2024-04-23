
// // Store Student Details
// let  detailButton =  document.getElementById('detail-btn').addEventListener('click', function(){
//     let rollNo = document.getElementById('rollNo').value;
//     let name = document.getElementById('name').value;
//     let batch = document.getElementById('batch').value;
//     let section = document.getElementById('section').value;
//     localStorage.setItem('rollNo', rollNo);
//     localStorage.setItem('name', name);
//     localStorage.setItem('batch', batch);
//     localStorage.setItem('section', section);
// })

// console.log(localStorage.getItem('rollNo'))

// // store Quiz Details
// let quizDetailsButton = document.getElementById('quiz-details-btn').addEventListener('click', function(){
//     let totalQuestions = document.getElementById('total-questions').value;
//     let correctMarks = document.getElementById('correct-marks').value;
//     let incorrectMarks = document.getElementById('incorrect-marks').value;
//     localStorage.setItem('totalQuestions', totalQuestions);
//     localStorage.setItem('correctMarks', correctMarks);
//     localStorage.setItem('incorrectMarks', incorrectMarks);
// })

// console.log(localStorage.getItem('totalQuestions'))


let quizDetailsButton = document.getElementById('quiz-btn').addEventListener('click', function() {
  let totalQuestions = document.getElementById('total-questions').value;
  let correctMarks = document.getElementById('correct-marks').value;
  let incorrectMarks = document.getElementById('incorrect-marks').value;
  localStorage.setItem('totalQuestions', totalQuestions);
  localStorage.setItem('correctMarks', correctMarks);
  localStorage.setItem('incorrectMarks', incorrectMarks);
  
  // Compare selected answers with correct answers
  let selectedAnswers = [];
  let correctAnswers = ['A', 'B', 'C', 'D']; // Predefined correct answers
  let marks = 0;
  
  for (let i = 1; i <= totalQuestions; i++) {
    let selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer) {   
      selectedAnswers.push(selectedAnswer.value);
      if (selectedAnswer.value === correctAnswers[i - 1]) {
        marks += parseInt(correctMarks);
      } else {
        marks -= parseInt(incorrectMarks);
      }
    }
  }
  
  // Display total marks
  console.log('Total Marks:', marks);
  
  // Store marks in Session Storage
  sessionStorage.setItem('marks', marks);
});

// console.log(localStorage.getItem('totalQuestions'));
console.log(localStorage.getItem('selectedAnswers'));


