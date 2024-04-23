
// Store Student Details
let  detailButton =  document.getElementById('detail-btn').addEventListener('click', function(){
    let rollNo = document.getElementById('rollNo').value;
    let name = document.getElementById('name').value;
    let batch = document.getElementById('batch').value;
    let section = document.getElementById('section').value;
    localStorage.setItem('rollNo', rollNo);
    localStorage.setItem('name', name);
    localStorage.setItem('batch', batch);
    localStorage.setItem('section', section);
    // window.location.href = './quiz.html';
})

detailButton.onclick
console.log(localStorage.getItem('rollNo'))