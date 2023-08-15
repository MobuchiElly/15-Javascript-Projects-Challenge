const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
btn.onclick=change;
const colorTextChange = document.querySelector(".color");


const ranNum = (arr) => Math.floor(Math.random() * arr.length);
function genNum(hex) {
    let hexVal = "#";
    for (let i=0; i < 6; i++)
    {
        hexVal += hex[ranNum(hex)];
    }
    return(hexVal);
}
let hexValue = genNum(hex);
function change()
{
    document.body.style.backgroundColor = genNum(hex);
    colorTextChange.textContent = genNum(hex);
    console.log(hexValue);
};
