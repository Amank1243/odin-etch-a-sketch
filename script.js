let div = document.querySelector(".container");
let button = document.querySelector("button");
let square = document.createElement("div");

square.className = "square";
square.style.height = "50px";
square.style.width = "50px";
square.style.border = "1px solid black";

let gridSize = 16 * 16;
function createGrid() {
   for (let i = 0; i < gridSize; i++) {
        let copy = square.cloneNode(true);
        div.appendChild(copy);
    }
}

createGrid();

let grid = document.querySelectorAll(".square");


grid.forEach(gridSquare => 
    gridSquare.addEventListener("mouseover" ,() => {
        gridSquare.style.backgroundColor = "black";
    })
);

let newSize;
// when button is clicked, create a new grid
button.addEventListener("click", () => {
    num = prompt("What size should the grid be?");
    if (num > 100) {
        return alert("Number must be less than 100");
    }
    gridSize = num * num;
    
    newSize = (832/num) - 2;
    square.style.height = newSize + "px";
    square.style.width = newSize + "px";

    grid.forEach(item =>
        item.remove()
    );

    createGrid();

    grid = document.querySelectorAll(".square");
    grid.forEach(gridSquare => 
    gridSquare.addEventListener("mouseover" ,() => {
        gridSquare.style.backgroundColor = "black";
    })
);
});