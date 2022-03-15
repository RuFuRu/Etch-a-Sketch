const container = document.querySelector(".container");
let squareDiv;

for(let i = 0; i < 256; i++) {
    squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'square-div');
    container.appendChild(squareDiv);
}

const newSquareDiv = document.querySelectorAll('.square-div');

let count = 1;
let click = () => count++;

container.addEventListener('click', MouseOver);
container.addEventListener('click', click);

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










