let ansSelectedValue = document.querySelector("#ansSelector1");
let ansSelectedValue2 = document.querySelector("#ansSelector2");
let ansSelectedValue3 = document.querySelector("#ansSelector3");
let ansSelectedValue4 = document.querySelector("#ansSelector4");
let ansSelectedValue5 = document.querySelector("#ansSelector5");

let submitBtn = document.querySelector("#submAns");
let marks = 0
submitBtn.addEventListener('click', () => {
    if (ansSelectedValue.value === "paris") {
        marks++
    } 
    if (ansSelectedValue2.value === "markup") {
        marks++
    }
    if(ansSelectedValue3.value === "germany"){
        marks++
    }
    if(ansSelectedValue4.value === "react"){
        marks++
    }
if(ansSelectedValue5.value === "JavaScript"){
    marks++
}

location.href = `./results.html?marks=${marks}`;
});
