const container = document.querySelector(".container");
const customGridBtn = document.querySelector('.custom-grid');
const grid8 = document.querySelector('.eight');
const grid24 = document.querySelector('.twenty-four');
const grid48 = document.querySelector('.fourty-eight');
const rezet = document.querySelector('.reset');
const rainbow = document.querySelector('.rainbow');
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
let rainbowCheck = 1;

container.addEventListener('click', MouseOver);
container.addEventListener('click', click);
customGridBtn.addEventListener('click', clickAButton);
grid8.addEventListener('click', grid8Init);
grid24.addEventListener('click',grid24Init);
grid48.addEventListener('click', grid48Init);
rezet.addEventListener('click',reset);
rainbow.addEventListener('click',rainbowCheque);

function MouseOver() {
    newSquareDiv.forEach(div => {
		if(rainbowCheck % 2 === 0) {
			div.addEventListener('mouseover', greatRainbow);
			div.addEventListener('mouseover', addWhite);
		}
		if(rainbowCheck % 2 !== 0) {
			div.addEventListener('mouseover', addBlack);
			div.addEventListener('mouseover', addWhite);
		}
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

function greatRainbow() {
	const colorArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	const arr = [];
	
	for(let i = 0; i < 6; i++) {
		arr.push(colorArr[Math.floor(Math.random() * 16)])
	}
	
	let newArr = arr.join("");

	this.style.backgroundColor = `#${newArr}`;
}

function rainbowCheque() {
	const rb = ++rainbowCheck
	return rb;
}

function clickAButton() {
    let howManySquares = parseInt(prompt('How many (x by x) grid squares would you like in your canvas ?'));
    
    if(howManySquares > 86) {
        alert("Too much, it could crash the site");
        return;
    }

    container.removeAttribute('style', 'grid-template-columns');
    container.textContent = '';
    container.setAttribute('style',`grid-template-columns: repeat(${howManySquares}, 1fr);`)
    for(let i = 0; i < howManySquares**2; i++) {
        squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square-div');
        container.appendChild(squareDiv);
        newSquareDiv = document.querySelectorAll('.square-div');
    }
}

function grid8Init() {
    container.removeAttribute('style', 'grid-template-columns');
    container.textContent = '';
    container.setAttribute('style',`grid-template-columns: repeat(8, 1fr);`);
    for(let i = 0; i < 64; i++) {
        squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square-div');
        container.appendChild(squareDiv);
        newSquareDiv = document.querySelectorAll('.square-div');
    }
}

function grid24Init() {
    container.removeAttribute('style', 'grid-template-columns');
    container.textContent = '';
    container.setAttribute('style',`grid-template-columns: repeat(24, 1fr);`);
    for(let i = 0; i < 576; i++) {
        squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square-div');
        container.appendChild(squareDiv);
        newSquareDiv = document.querySelectorAll('.square-div');
    }
}

function grid48Init() {
	container.removeAttribute('style', 'grid-template-columns');
    container.textContent = '';
    container.setAttribute('style',`grid-template-columns: repeat(48, 1fr);`);
    for(let i = 0; i < 2304; i++) {
        squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square-div');
        container.appendChild(squareDiv);
        newSquareDiv = document.querySelectorAll('.square-div');
    }
}

function reset() {
	newSquareDiv.forEach(div => {
		div.style.backgroundColor = 'white';
	})
}

