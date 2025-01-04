let square_per_side = 16;
// let grid_num = square_num_per_side ** 2;

const container = document.querySelector(".box_container");

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


// const square = document.querySelectorAll(".square");
// const row = document.querySelectorAll(".row");

// container.setAttribute("style", "display: flex; flex-direction: column;");
// square.setAttribute("style", "border-color: black;");
// row.setAttribute("style", "display: flex; width: 50%; padding-bottom: 50%");
