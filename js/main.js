/*
To show list of quizes
*/
function displayListOfQuizs() {
    let homeDiv = document.createElement("div");
    homeDiv.id = "home";
    data.forEach(item => {
        let col_4 = document.createElement("div");
        col_4.className = "col-4";
        let h2 = document.createElement("h2");
        h2.textContent = item.topic;
        let p = document.createElement("p");
        p.textContent = item.desc;
        let button = document.createElement("button");
        button.className = "play";
        button.textContent = "Play now!";
        button.id = item.id;
        col_4.appendChild(h2);
        col_4.appendChild(p);
        col_4.appendChild(button);
        homeDiv.appendChild(col_4);
    });
    body.appendChild(homeDiv);
}
/*
To show each quiz
*/
function showQuestions(event) {
    // check if user click on play
    if (event.target.textContent === "Play now!") {
        let i = 1;
        quizContent.style.display = "none";
        let divQuestionContent = document.querySelector("#quiz-content");
        divQuestionContent.style.display = "block";
        //get id from user select to query the data from the list
        let quiz = data[event.target.id];
        let questions = quiz.quiz;
        let divTitle = document.createElement("div");
        divTitle.id = "title";
        let h2 = document.createElement("h2");
        h2.textContent = quiz.topic;
        let p = document.createElement("p");
        p.textContent = quiz.desc;
        divTitle.appendChild(h2);
        divTitle.appendChild(p);
        let divQuestionList = document.createElement("div");
        divQuestionList.id = "question-list";
        // loop to get all  questions in the quiz
        questions.forEach(item => {
            let h5 = document.createElement("h5");
            h5.textContent = i.toString() + "/ " + item.question;
            let form = document.createElement("form");
            form.action = "#";
            // loop to get choise in each question.
            for (let choice of item.choices) {
                let inp = document.createElement("input");
                inp.id = "choice";
                inp.name = "choice";
                inp.type = "radio";
                let label = document.createElement("label");
                label.htmlFor = "choice";
                label.textContent = choice;
                form.appendChild(inp);
                form.appendChild(label);
            }
            divQuestionList.appendChild(h5);
            divQuestionList.appendChild(form);
            i++;
        }); 
        let buttonSubmit = document.createElement("button");
        buttonSubmit.id = "submit-answer";
        buttonSubmit.textContent = "Submit";
        divQuestionList.appendChild(buttonSubmit);
        divQuestionContent.appendChild(divTitle);
        let hr = document.createElement("hr")
        divQuestionContent.appendChild(hr);
        divQuestionContent.appendChild(divQuestionList);
        console.log(divQuestionContent);
    }
}

/*
List of quizes
*/
let data = [
    {
        id: 0,
        topic: "Past Simple", quiz: [
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1},
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
        ],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eaque,"
    },
    {
        id: 1,
        topic: "Past Perfect", quiz: [
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
        ],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eaque,"
    },
    {
        id: 2,
        topic: "Future simple", quiz: [
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
            { question: "What is correct answer?", choices: ["Hello world", "This is my test", "I am well", "HI PNC"], answer: 1 },
        ],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eaque,"
    },
]

/*
Main code
*/
let body = document.body;
displayListOfQuizs();
let quizContent = document.querySelector("#home");
let btnSubmitAnswer = document.querySelector("#submit-answer");
quizContent.addEventListener("click", showQuestions);