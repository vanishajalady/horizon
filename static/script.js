const words = [
    "Backend Developer",
    "FastAPI Engineer",
    "API Developer",
    "Python Programmer",
    "Database Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function type() {

    if(charIndex < words[wordIndex].length){

        typingElement.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);
    }
}

function erase(){

    if(charIndex > 0){

        typingElement.textContent =
        words[wordIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(erase,50);
    }

    else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;
        }

        setTimeout(type,200);
    }
}

type();

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach((section)=>{

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");
        }

    });

});