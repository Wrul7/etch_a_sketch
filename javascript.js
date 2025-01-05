let square_per_side = 16;

const square_num_prompt = document.querySelector(".square_num_prompt");


/* Pseudocode
1. Click button
2. Ask thru prompt
3. While prompt hold invalid value
    3.1 If prompt is blank, show error message
    3.2 If prompt is not an integer, show error message
    3.3 If prompt is greater than 100, show error message
4. If prompt is valid, assign value to square_per_side
4. Trigger create_grid function
*/
square_num_prompt.addEventListener("click", () => {
    let square_num = Number(prompt("Input the number of squares you want for each side:\nNote: Maximum is 100."));
    while (true) {
        if (square_num == null) {
            break;
        }

        if (!square_num) {
            square_num = Number(prompt("Error: Empty input\nInput the number of squares you want for each side:\nNote: Maximum is 100."));
            continue;
        } else if (!Number.isInteger(square_num)) {
            square_num = Number(prompt("Error: Input is not a number.\nInput the number of squares you want for each side:\nNote: Maximum is 100."));
            continue;
        } else if (square_num > 100) {
            square_num = Number(prompt("Error: Input greater than 100.\nInput the number of squares you want for each side:\nNote: Maximum is 100.")); 
            continue;
        } else {
            square_per_side = square_num;
            create_grid();
            break;
        }
    }
});

const container = document.querySelector(".box_container");

function create_grid() {
    for (let i = 1; i <= square_per_side; i++) {
        let create_row = document.createElement("div")
        create_row.setAttribute("class", "row");
        
        for (let j = 1; j <= square_per_side; j++) {
            let create_square = document.createElement("div");
            create_square.setAttribute("class", "square");
            create_row.appendChild(create_square);
        }
    
        container.appendChild(create_row);
    }
}

create_grid(); 
// Keep create_grid function below the container declaration and above squares declaration

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
        e.target.setAttribute("style", "background-color: black;");
    });
});

