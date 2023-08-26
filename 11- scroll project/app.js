// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");
date.textContent = (() => {
    return (new Date().getFullYear());
})();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;

    if (linksContainerHeight == 0)
    {
        linksContainer.style.height = `${linksHeight}px`;
        // linksContainer.classList.toggle("show-links");
    }
    else 
    {
        linksContainer.style.height = 0;
    }
})


// ********** fixed navbar ************
const topLink = document.querySelector(".top-link");
const navbar = document.querySelector("#nav");
window.addEventListener("scroll", () => {
//Logic to ensure that when scroll height gets to 983 that is close to the page bottom the show-link class is dded thus enbling the back to top-link
let scrollHeight = window.pageYOffset;
let navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight >= 700)
    {
        topLink.classList.add("show-link");
    }
    else{
        topLink.classList.remove("show-link");
    }
//Logic to call in the fixed nav so the navbar would always be present. I, however, want to call in this class only when the scroll height which would be gotten dynamically is larger that the dynamically gotten nav height. 
    if (scrollHeight > navHeight)
    {
        navbar.classList.add("fixed-nav")
    // }
    // else{
    //     navbar.classList.remove("fixed-nav")
    }
})


// ********** smooth scroll ************
// select links
let scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((v) => {
    v.addEventListener("click",(e) => {
        e.preventDefault();
        //const id = e.currentTarget.textContent;
        //OR
        const id = e.currentTarget.getAttribute("href").slice(1);
        const idValue = document.getElementById(id);
        let containerHeight = linksContainer.getBoundingClientRect().height;
        let navHeight = navbar.getBoundingClientRect().height;
        let position = idValue.offsetTop - navHeight;
        if (!(navbar.classList.contains("fixed-nav")))
        {
           position - navHeight; 
        }
        if (navbar > 82)
        {
            position = position + containerHeight;
        }
        
        window.scrollTo({left:0, top:position});
        linksContainer.style.height = 0;
    })
});
