let ansSelectedValue = document.querySelector("#ansSelecter1");
let ansSelectedValue2 = document.querySelector("#ansSelecter2");
let ansSelectedValue3 = document.querySelector("#ansSelecter3");
let ansSelectedValue4 = document.querySelector("#ansSelecter4");
let ansSelectedValue5 = document.querySelector("#ansSelecter5");

let submitBtn = document.querySelector("#submAns");
let marks = 0
submitBtn.addEventListener('click', () => {
    if (ansSelectedValue.value === "It refers to the current object.") {
        marks++
    } 
    if (ansSelectedValue2.value === "float") {
        marks++
    }
    if(ansSelectedValue3.value === "border-collapse"){
        marks++
    }
    if(ansSelectedValue4.value === "myFunction: function() {}"){
        marks++
    }
if(ansSelectedValue5.value === "script"){
    marks++
}

location.href = `./results.html?marks=${marks}`;
});
