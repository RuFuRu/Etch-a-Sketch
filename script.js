const container = document.querySelector(".container");
const customGridBtn = document.querySelector('.custom-grid');
const grid32 = document.querySelector('.thirty-two');
const grid48 = document.querySelector('.fourty-eight');
let squareDiv;

container.setAttribute('style', "grid-template-columns: repeat(16, 1fr);");
for(let i = 0; i < 256; i++) {
    squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'square-div');
    container.appendChild(squareDiv);
}

let newSquareDiv;
newSquareDiv = document.querySelectorAll('.square-div');

//click counter
let count = 1;
let click = () => count++;

container.addEventListener('click', MouseOver);
container.addEventListener('click', click);
customGridBtn.addEventListener('click', clickAButton);

function MouseOver() {
    newSquareDiv.forEach(div => {
        div.addEventListener('mouseover', addBlack);
        div.addEventListener('mouseover', addWhite);
    });
}

function addBlack() {
    this.style.backgroundColor = 'black';
}

function addWhite() {
    if(count % 2) {
        this.style.backgroundColor = 'white';
    }
}

function clickAButton() {
    let howManySquares = parseInt(prompt('How much squares would you like?'));
    
    if(howManySquares > 86) {
        alert("That's too much squares, write another number");
        return;
    }

    container.removeAttribute('style', 'grid-template-columns');
    container.innerHTML = '';
    container.setAttribute('style',`grid-template-columns: repeat(${howManySquares}, 1fr);`)
    for(let i = 0; i < howManySquares**2; i++) {
        squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square-div');
        container.appendChild(squareDiv);
        newSquareDiv = document.querySelectorAll('.square-div');
    }
}








