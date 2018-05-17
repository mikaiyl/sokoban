// const mazeArray = [ [ 'W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W' ],
//                     [ 'W',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ','W' ],
//                     [ 'W',' ','W',' ','W',' ','W','W','W',' ','W','W','W','W','W',' ','W',' ','W',' ','W' ],
//                     [ 'W',' ','W',' ','W',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ',' ',' ','W' ],
//                     [ 'W',' ','W','W','W','W','W','W','W',' ','W',' ','W','W','W',' ','W',' ','W',' ','W' ],
//                     [ 'W',' ',' ',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ','W' ],
//                     [ 'W',' ','W','W','W',' ','W','W','W','W','W',' ','W','W','W','W','W',' ','W',' ','W' ],
//                     [ 'W',' ','W',' ',' ',' ','W',' ',' ',' ','W',' ','W',' ',' ',' ',' ',' ','W',' ','W' ],
//                     [ 'W',' ','W','W','W','W','W',' ','W',' ','W',' ','W',' ','W','W','W',' ','W',' ','F' ],
//                     [ 'C',' ',' ',' ',' ',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W','W','W' ],
//                     [ 'W','W','W','W','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W' ],
//                     [ 'W',' ',' ',' ',' ',' ','W',' ','W',' ','W',' ',' ',' ','W',' ','W',' ','W',' ','W' ],
//                     [ 'W',' ','W','W','W','W','W','W','W',' ','W','W','W','W','W',' ','W',' ','W',' ','W' ],
//                     [ 'W',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ','W' ],
//                     [ 'W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W' ] ];

const mazeArrayTwo = [ [ ' ',' ',' ',' ','W','W','W','W','W',' ',' ',' ',' ',' ','LEVEL',' ',' ',' ',' ' ],
                      [ ' ',' ',' ',' ','W',' ',' ',' ','W',' ',' ',' ',' ',' ','TWO',' ',' ',' ',' ' ],
                      [ ' ',' ',' ',' ','W','B',' ',' ','W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ' ],
                      [ ' ',' ','W','W','W',' ',' ','B','W','W',' ',' ',' ',' ',' ',' ',' ',' ',' ' ],
                      [ ' ',' ','W',' ',' ','B',' ','B',' ','W',' ',' ',' ',' ',' ',' ',' ',' ',' ' ],
                      [ 'W','W','W',' ','W',' ','W','W',' ','W',' ',' ',' ','W','W','W','W','W','W' ],
                      [ 'W',' ',' ',' ','W',' ','W','W',' ','W','W','W','W','W',' ',' ','O','O','W' ],
                      [ 'W',' ','B',' ',' ','B',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','O','O','W' ],
                      [ 'W','W','W','W','W',' ','W','W','W',' ','W','C','W','W',' ',' ','O','O','W' ],
                      [ ' ',' ',' ',' ','W',' ',' ',' ',' ',' ','W','W','W','W','W','W','W','W','W' ],
                      [ ' ',' ',' ',' ','W','W','W','W','W','W','W',' ',' ',' ',' ',' ',' ',' ',' ' ] ]

const mazeArrayOne =   [ [ ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'LEVEL' ],
                      [ 'W', 'W', 'W', ' ', ' ', ' ', 'W', 'ONE' ],
                      [ 'W', 'O', 'C', 'B', ' ', ' ', 'W', ' ' ],
                      [ 'W', 'W', 'W', ' ', 'B', 'O', 'W', ' ' ],
                      [ 'W', 'O', 'W', 'W', 'B', ' ', 'W', ' ' ],
                      [ 'W', ' ', 'W', ' ', 'O', ' ', 'W', 'W' ],
                      [ 'W', 'B', ' ', 'X', 'B', 'B', 'O', 'W' ],
                      [ 'W', ' ', ' ', ' ', 'O', ' ', ' ', 'W' ],
                      [ 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' ] ];

// CHANGE WITH MAZEARRAY
// char column/row 0,9 11,8 2,2
const state = {
    charCol: 0,
    charRow: 0,
    mazeArray: mazeArrayOne,
    maze: document.getElementById("maze"),
    DOMCells: maze.getElementsByClassName("cell"),
    charachter: document.createElement("div"),
    isMoving: false,
    waitTime: 230,
    dimensions: {
        height: 15,
        width: 21,
    },
    offByOne: 1,
}

state.charachter.id = "running-man";

state.setCharPos = () => {
    for( let row in state.mazeArray ) {
        for( let col in state.mazeArray[row] ) {
            if ( state.mazeArray[row][col] == "C" ) {
                debugger
                state.charCol = parseInt(col);
                state.charRow = parseInt(row);
            }
        }
    }
}

/* Create DOM maze from maze array */
const printMazeToDOM = () => {
    state.setCharPos();
    for ( let mazeArrayRowIndex in state.mazeArray ) {
        let DOMRow = document.createElement("div");
        DOMRow.id = "r" + mazeArrayRowIndex;
        DOMRow.classList.add("row");
        for ( let mazeArrayColumnIndex in state.mazeArray[mazeArrayRowIndex] ){ // create elements for flexbox
            let rowIndex = parseInt(mazeArrayRowIndex);
            let columnIndex = parseInt(mazeArrayColumnIndex);
            let DOMcell = document.createElement("div");
            DOMcell.classList.add("cell");
            DOMcell.classList.add("r" + mazeArrayRowIndex);
            DOMcell.classList.add("c" + mazeArrayColumnIndex);
            if ( state.mazeArray[mazeArrayRowIndex][mazeArrayColumnIndex] === "W" ) {
                DOMcell.dataset.wall = true;
            } else if ( state.mazeArray[mazeArrayRowIndex][mazeArrayColumnIndex] === "B" ) {
                DOMcell.dataset.crate = true;
            } else if ( state.mazeArray[mazeArrayRowIndex][mazeArrayColumnIndex] === "O" ) {
                DOMcell.dataset.point = true;
            } else if ( state.mazeArray[mazeArrayRowIndex][mazeArrayColumnIndex] === "X" ) {
                DOMcell.dataset.point = true;
                DOMcell.dataset.crate = true;
            } else if ( state.mazeArray[mazeArrayRowIndex][mazeArrayColumnIndex].length > 1 ) {
                let letter = state.mazeArray[mazeArrayRowIndex][mazeArrayColumnIndex];
                DOMcell.textContent = letter;
            } DOMRow.appendChild(DOMcell);
        } state.maze.appendChild(DOMRow);
    } state.maze.querySelector("div.cell.r" + state.charRow + ".c" + state.charCol).appendChild(state.charachter);
};

/*   Listen for the movement keys and move the charachter appropriately.  */
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    let row = state.charRow, col = state.charCol;
    let element = state.maze.querySelector("div.cell.r" + (parseInt(row)) + ".c" + (parseInt(col)));

    if ( keyName == "ArrowDown" &&  state.mazeArray[row+state.offByOne][col] !== "W" && row < state.dimensions.height - state.offByOne  && !state.isMoving) {
        let targetElement = state.maze.querySelector("div.cell.r" + (parseInt(row)+1) + ".c" + (parseInt(col)));
        if ( targetElement.dataset.crate == "true" ) {
            let nextElement = state.maze.querySelector("div.cell.r" + (parseInt(row)+2) + ".c" + (parseInt(col)));
            // move box or not
            if ( nextElement.dataset.crate == "true" || nextElement.dataset.wall == "true" ) {
            } else {
                nextElement.dataset.crate = true;
                targetElement.dataset.crate = false;
                state.isMoving = true;
                state.charRow += state.offByOne;
                state.charachter.style.transform = "rotate(0.25turn)";
                state.charachter.classList.add("animateS");
                setTimeout(() => unAnimate( "S", moveMan()), state.waitTime);
                }
        } else {
                state.isMoving = true;
                state.charRow += state.offByOne;
                state.charachter.style.transform = "rotate(0.25turn)";
                state.charachter.classList.add("animateS");
                setTimeout(() => unAnimate( "S", moveMan()), state.waitTime);
        }
    } else if ( keyName == "ArrowUp" &&  state.mazeArray[row-state.offByOne][col] !== "W" && row > 0  && !state.isMoving ) {
        let targetElement = state.maze.querySelector("div.cell.r" + (parseInt(row)-1) + ".c" + (parseInt(col)));
        if ( targetElement.dataset.crate == "true" ) {
            let nextElement = state.maze.querySelector("div.cell.r" + (parseInt(row)-2) + ".c" + (parseInt(col)));
            // move box or not
            if ( nextElement.dataset.crate == "true" || nextElement.dataset.wall == "true" ) {
        } else {
                nextElement.dataset.crate = true;
                targetElement.dataset.crate = false;
                state.isMoving = true;
                state.charRow -= state.offByOne;
                state.charachter.style.transform = "rotate(-0.25turn)";
                state.charachter.classList.add("animateN");
                setTimeout(() => unAnimate( "N", moveMan()), state.waitTime);
                }
        } else {
            state.isMoving = true;
            state.charRow -= state.offByOne;
            state.charachter.style.transform = "rotate(-0.25turn)";
            state.charachter.classList.add("animateN");
            setTimeout(() => unAnimate( "N", moveMan()), state.waitTime);
        }
    } else if ( keyName == "ArrowLeft" &&  state.mazeArray[row][col-state.offByOne] !== "W" && col > 0  && !state.isMoving ) {
        let targetElement = state.maze.querySelector("div.cell.r" + (parseInt(row)) + ".c" + (parseInt(col)-1));
        if ( targetElement.dataset.crate == "true" ) {
            let nextElement = state.maze.querySelector("div.cell.r" + (parseInt(row)) + ".c" + (parseInt(col)-2));
            // move box or not
            if ( nextElement.dataset.crate == "true" || nextElement.dataset.wall == "true" ) {
            } else {
                nextElement.dataset.crate = true;
                targetElement.dataset.crate = false;
                state.isMoving = true;
                state.charCol -= state.offByOne;
                state.charachter.style.transform = "scaleX(-1)";
                state.charachter.classList.add("animateW");
                setTimeout(() => unAnimate( "W", moveMan()), state.waitTime);
            }
        } else {
            state.isMoving = true;
            state.charCol -= state.offByOne;
            state.charachter.style.transform = "scaleX(-1)";
            state.charachter.classList.add("animateW");
            setTimeout(() => unAnimate( "W", moveMan()), state.waitTime);
        }
    } else if ( keyName == "ArrowRight" &&  state.mazeArray[row][col+state.offByOne] !== "W" && col < state.dimensions.width - state.offByOne  && !state.isMoving ) {
        let targetElement = state.maze.querySelector("div.cell.r" + (parseInt(row)) + ".c" + (parseInt(col)+1));
        if ( targetElement.dataset.crate == "true" ) {
            let nextElement = state.maze.querySelector("div.cell.r" + (parseInt(row)) + ".c" + (parseInt(col)+2));
            // move box or not
            if ( nextElement.dataset.crate == "true" || nextElement.dataset.wall == "true" ) {
            } else {
                nextElement.dataset.crate = true;
                targetElement.dataset.crate = false;
                state.isMoving = true;
                state.charCol += state.offByOne;
                state.charachter.style.transform = "rotate(0turn)";
                state.charachter.classList.add("animateE");
                setTimeout(() => unAnimate( "E", moveMan()), state.waitTime);
            }
        } else {
            state.isMoving = true;
            state.charCol += state.offByOne;
            state.charachter.style.transform = "rotate(0turn)";
            state.charachter.classList.add("animateE");
            setTimeout(() => unAnimate( "E", moveMan()), state.waitTime);
        }
    }
});

const cratesOnPoints = () => {
    let areCratesOnPoints = true;
    for ( let cell of state.DOMCells ) {
        if ( cell.dataset.crate == "true" && cell.dataset.point != "true" ) {
            areCratesOnPoints = false;
        }
    } return areCratesOnPoints;
}

document.addEventListener('keyup', (event) => {
    // if the character is on the winning square, call win function
    if (  cratesOnPoints() == true  ) {
        setTimeout( win(), state.waitTime * 1.5);
}});

/* do the win thing */
const win = () => {
    alert("You won!");
    state.mazeArray = mazeArrayTwo;
    state.maze.innerHTML = "";
    printMazeToDOM();
}

/* move charachter */
const moveMan = () => {
    debugger;
    state.maze.querySelector("div.cell.r" + state.charRow + ".c" + state.charCol).appendChild(state.charachter);
}

/* move box */

/* stop animation */
const unAnimate = ( dir) => {
    if (dir === "N") {
        state.charachter.classList.remove("animateN");
    } else if (dir === "S") {
        state.charachter.classList.remove("animateS");
    } else if (dir === "E") {
        state.charachter.classList.remove("animateE");
    } else if (dir === "W") {
        state.charachter.classList.remove("animateW");
    } state.isMoving = false;
}

/* Main function, call everything */
(() => {
    printMazeToDOM();
})();