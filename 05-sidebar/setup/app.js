const sideBarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

sideBarToggle.addEventListener("click", () => {
    console.log("I am working");
    sideBar.classList.toggle("show-sidebar");
})
closeBtn.addEventListener("click", () => {
    console.log("I am working");
    sideBar.classList.remove("show-sidebar");
})
