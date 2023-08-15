//I can achive this using two methods
//using selectors inside the element

// const questions = document.querySelectorAll(".question");
// questions.forEach((question) => {
//     const btn = question.querySelector(".question-btn");
//     btn.addEventListener("click", () => {
//         questions.forEach((currQuestion) => {
//             if (currQuestion !== question)
//             {
//                 currQuestion.classList.remove("show-text")
//             }
//         })
//         question.classList.toggle("show-text");
//     })
// });

// // traversing the dom
const btns = document.querySelectorAll(".question-btn");
    
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((currBtn) => {
            if (currBtn !== btn)
            {
                currBtn.parentNode.parentNode.classList.remove("show-text");
            }
        })
        btn.parentNode.parentNode.classList.toggle ("show-text");
    })
})
