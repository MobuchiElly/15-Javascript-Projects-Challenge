//Target the overall article class
const about = document.querySelector(".about");
//Target all buttons
const btns = document.querySelectorAll(".tab-btn")
//Target all articles
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    let idValue = document.getElementById(id);
    if(id)
    {
        //remove active class from other buttons
        btns.forEach((btn) => {
            btn.classList.remove("active");
        })
        articles.forEach((article) => {
            article.classList.remove("active")
        })
        //add active class to the article content so as to display it.
        idValue.classList.add("active");
        //add active class to any button clicked
        e.target.classList.add("active");      
    }
})