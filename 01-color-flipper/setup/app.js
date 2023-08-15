const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let bodyColorChange = document.getElementById("btn");
let colorTextChange = document.querySelector(".color");

bodyColorChange.addEventListener("click", change);
function change()
{
    document.body.style.backgroundColor = colors[getRandomNum(colors)];
    colorTextChange.textContent = colors[getRandomNum(colors)];
};

let getRandomNum = (arr) => (Math.floor(Math.random() * arr.length));

