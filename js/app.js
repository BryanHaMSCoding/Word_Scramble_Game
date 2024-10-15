const words = [
    {
        word: "algorithm",
        hint: "A set of rules or steps to solve a problem."
    },
    {
        word: "binary",
        hint: "The basic language of computers, consisting of 0s and 1s."
    },
    {
        word: "compiler",
        hint: "A program that translates code into executable instructions."
    },
    {
        word: "debugger",
        hint: "The process of finding and fixing errors in code."
    },
    {
        word: "function",
        hint: "A block of code designed to perform a specific task."
    },
    {
        word: "loop",
        hint: "A sequence of instructions that repeats until a condition is met."
    },
    {
        word: "variable",
        hint: "A storage location identified by a name that holds data."
    },
    {
        word: "array",
        hint: "A collection of elements, typically of the same type."
    },
    {
        word: "object",
        hint: "An instance of a class containing data and methods."
    },
    {
        word: "syntax",
        hint: "The set of rules that defines the combinations of symbols."
    },
    {
        word: "class",
        hint: "A blueprint for creating objects in object-oriented programming."
    },
    {
        word: "string",
        hint: "A sequence of characters."
    },
    {
        word: "boolean",
        hint: "A data type with two possible values: true or false."
    },
    {
        word: "framework",
        hint: "A platform for developing software applications."
    },
    {
        word: "library",
        hint: "A collection of pre-compiled routines that a program can use."
    },
    {
        word: "javascript",
        hint: "A programming language commonly used to create interactive effects within web browsers."
    }
]

const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshButton = document.querySelector(".refresh-word");
const checkButton = document.querySelector(".check-word");
const messageDiv = document.querySelector(".message");
const scoreboard = document.querySelector(".scoreboard");
const scoreText = document.querySelector(".score-text");


let correctWord;
let timer;
let currentScore = 0;

const initTimer = maxTime => {
    //clear any existing timer
    clearInterval(timer);
    timer = setInterval(() => {
        // changes color to indicate time is running out
        if (maxTime > 6) {
            timeText.style.color = "black";
        }else {
            timeText.style.color = "red";
        }//end if else
        
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
            return;
        }//end if

        // time's up, stop timer and notify player
        clearInterval(timer);
        messageDiv.textContent = `Time's Up! ${correctWord.toUpperCase()} was the correct word!`;
        messageDiv.className = "message error";

        // restart game after 2.5 sec delay
        setTimeout(initGame, 2500);
    }, 1000);
}//end function

const initGame = () => {
    initTimer(31);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }//end for loop

    wordText.innerText = wordArray.join("");
    
    hintText.innerText = randomObj.hint;
    
    correctWord = randomObj.word.toLowerCase();
    
    inputField.value = "";
    
    inputField.setAttribute("maxLength", correctWord.length);
    
    messageDiv.textContent = "";
    
    messageDiv.className = "message";
    
    checkButton.disabled = true;
    
    timeText.style.color = "black";
}//end function


const checkWord = () => {
    // getting user value
    let userWord = inputField.value.toLowerCase();
    
    if (!userWord) {
        messageDiv.textContent = "Please enter a word to check";
        messageDiv.className = "message error";
        return;
    }//end if

    if (userWord !== correctWord) {
        messageDiv.textContent = `Try Again! ${userWord.toUpperCase()} is not the correct word!`;
        messageDiv.className = "message error";
    }else {
        currentScore += 1;
        scoreText.innerText = currentScore;

        messageDiv.textContent = `Congrats! ${userWord.toUpperCase()} is the correct word!`;
        messageDiv.className = "message success";
        setTimeout(initGame, 2500);
    }//end if else

}//end function

refreshButton.addEventListener("click", initGame);
checkButton.addEventListener("click", checkWord);
inputField.addEventListener("input", () => {
    checkButton.disabled = inputField.value.trim() === "";
});

inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !checkButton.disabled) {
        checkWord();
    }
});

initGame();
