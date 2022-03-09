const container = document.querySelector(".container");
let squareDiv;

for(let i = 0; i < 256; i++) {
    squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'square-div');
    container.appendChild(squareDiv);
}

const newSquareDiv = document.querySelectorAll('.square-div');

newSquareDiv.forEach((div) => {
    div.addEventListener('mouseover', () => {
        event.target.style.backgroundColor = "black";
    })
})