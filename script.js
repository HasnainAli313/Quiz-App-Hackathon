const submitButton = document.querySelector("#submit");

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const rollNumber = document.querySelector("#rollNumber").value;
        const name = document.querySelector("#name").value;
        const batch = document.querySelector("#batch").value;
        const section = document.querySelector("#section").value;

        if (rollNumber === "" || name === "" || batch === "" || section === "") {
            alert("Please fill out all fields.");
        } else {
            window.location.href = "./quiz/quiz.html";
        }
    });