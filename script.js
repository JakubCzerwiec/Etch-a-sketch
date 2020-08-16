/* Setting variables */

const container = document.querySelector('.container');
let squars = document.querySelectorAll('.square');

const resetBl = document.querySelector('.resetBlack');
const resetCol = document.querySelector('.randomColor');
const resetGrey = document.querySelector('.greyScale');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


/* Creating default 4*4 Grid */

function defaultGrid() {
    for (let i = 0; i < 16; i++) {
    
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('square');
    
    container.appendChild(gridDiv);
    container.classList.add('defaultGrid');

    gridDiv.addEventListener('mouseover', () => {
        gridDiv.classList.add('black')
            })
        }
}

defaultGrid ();


/* CREATING USER-DEFINED GRID BLACK */

resetBl.addEventListener('click', resetBlack);

function resetBlack () {
    let resetPrompt = window.prompt('How big you want it?');
    container.innerHTML = '';
    for (let i = 0; i < resetPrompt * resetPrompt; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('square');

        container.classList.remove('defaultGrid');
        container.style.cssText = (`display: grid; grid-template-columns: repeat(${resetPrompt},1fr);
        grid-template-rows: repeat(${resetPrompt},1fr); border: 1px solid black`);
        container.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', () => {
            gridDiv.classList.add('black')
                })
            }

        }



/* CREATING USER-DEFINED GRID WITH RANDOM COLORS */


/* Button listener */
resetCol.addEventListener('click', resetColor);


/* Drawing the grid */
function resetColor () {
    let resetPrompt = window.prompt('How big you want it?');

    container.innerHTML = '';

    for (let i = 0; i < resetPrompt * resetPrompt; i++) {
        
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('square');
        container.classList.remove('defaultGrid');
        container.style.cssText = (`display: grid; grid-template-columns: repeat(${resetPrompt},1fr);
        grid-template-rows: repeat(${resetPrompt},1fr); border: 1px solid black`);
        container.appendChild(gridDiv);


/* Hoover listener */
            gridDiv.addEventListener('mouseover', () => {
                let colorNum = drawCol();
                gridDiv.style.backgroundColor = `${colorNum}`;
                

    /* Drawing random color */
                            function drawCol () {
                                let hexCol = '#';

                                for (let i = 0; i < 6; i++) {
                                    let randomNumber = Math.floor(Math.random() * hex.length);
                                    hexCol += hex[randomNumber];
                                }
                                return hexCol;
                                
                            }
            });
        }
}


/* CREATING USER-DEFINED GRID WITH GREY-SCALE */

/* Button listener */
resetGrey.addEventListener('click', resetGr);


/* Drawing the grid */
function resetGr () {
    let resetPrompt = window.prompt('How big you want it?');

    container.innerHTML = '';

    for (let i = 0; i < resetPrompt * resetPrompt; i++) {
        
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('square');
        gridDiv.classList.add('black');
        container.classList.remove('defaultGrid');
        container.style.cssText = (`display: grid; grid-template-columns: repeat(${resetPrompt},1fr);
        grid-template-rows: repeat(${resetPrompt},1fr); border: 1px solid black`);
        container.appendChild(gridDiv);
        
        
        gridDiv.setAttribute('style', `background-color: rgba(0, 0, 0, 0)`)
        

/* Hoover listener */
            gridDiv.addEventListener('mouseover', () => {

                let oppa = gridDiv.getAttribute('style', 'background-color');

                if (oppa === 'background-color: rgba(0, 0, 0, 0)') {
                    gridDiv.setAttribute('style', `background-color: rgba(0, 0, 0, 0.2)`)
                } else if (oppa === 'background-color: rgba(0, 0, 0, 0.2)') {
                    gridDiv.setAttribute('style', `background-color: rgba(0, 0, 0, 0.4)`)
                } else if (oppa === 'background-color: rgba(0, 0, 0, 0.4)') {
                    gridDiv.setAttribute('style', `background-color: rgba(0, 0, 0, 0.6)`)
                } else if (oppa === 'background-color: rgba(0, 0, 0, 0.6)') {
                    gridDiv.setAttribute('style', `background-color: rgba(0, 0, 0, 0.8)`)
                } else if (oppa === 'background-color: rgba(0, 0, 0, 0.8)') {
                    gridDiv.setAttribute('style', `background-color: rgba(0, 0, 0, 1)`)
                } 
            })
        }
}