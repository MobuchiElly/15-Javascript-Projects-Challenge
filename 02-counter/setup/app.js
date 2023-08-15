//set initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//access each button in the button node like an array
btns.forEach((btn) => {

    btn.addEventListener("click", (v) => {
        //access/target the classlist of each button element so as to change the value of count
        const btnClass = v.currentTarget.classList;
        if (btnClass.contains("decrease"))
        {
            count--
        }
        else if(btnClass.contains("reset"))
        {
            count = 0;
        }
        else if(btnClass.contains("increase"))
        {
            count++;
        }
        //Changing the CSS color prop of the value-count on the screen based on the actual value count
        count > 0 ? value.style.color="green" : count < 0 ? value.style.color="blue" : value.style.color="red";
    //This is where i changed the innerHTML of the value ID to reflect count variable     
    value.innerHTML = count;
    });
})

