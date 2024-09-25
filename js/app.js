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

const initGame = () => {
    // getting random object from words
    let randomObj = words[Math.floor(Math.random() * words.length)];
    // splitting each letter of random word
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        // getting random number
        let j = Math.floor(Math.random() * (i + 1));
        //Shuffling and swiping wordArray letters randomly
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }
    // passing shuffled word as word text
    wordText.innerText = wordArray.join("");
    // passing random object hint as hint text
    hintText.innerText = randomObj.hint;
    console.log(wordArray, randomObj.word);
}

initGame();