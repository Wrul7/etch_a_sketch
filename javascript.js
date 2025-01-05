let square_per_side = 16;

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