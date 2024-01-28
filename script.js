let box = document.getElementsByClassName("box")[0];
let turn = true; 
let array = [
    false, false, false, false, false, false, false, false, false
];

// let winningCombinations = [
//     {
//         [0, 1, 2]
//         [0, 3, 6]
//         [0, 4, 8]
//         [1, 4, 7]
//         [2, 4, 6]
//         [2, 5, 8]
//         [3, 4, 5]
//         [6, 7, 8]
//     }
// ]

array.map((item, index) => {
    let one = document.createElement("div");
    box.appendChild(one);
    one.addEventListener("click", () => onclick(index, one));

    if (index === 0) {
        one.className = "up";
    }
    if (index === 1) {
        one.className = "up";
    }
    if (index === 2) {
        one.className = "last";
    }
    if (index === 3) {
        one.className = "center";
    }
    if (index === 4) {
        one.className = "center";
    }
    if (index === 5) {
        one.className = "last";
    }
    if (index === 6) {
        one.className = "down";
    }
    if (index === 7) {
        one.className = "down";
    }
    if (index === 8) {
        one.className = "nothing";
    }
});

function onclick(index, one) {
    turn = !turn;

    if (!array[index]) {
        if (turn) {
            let image = document.createElement("img");
            image.src = "/o.png";
            image.className = "o";
            one.appendChild(image);
        } else {
            let image = document.createElement("img");
            image.src = "/x.png";
            image.className = "o"
            one.appendChild(image);   
        }

        array[index] = true;
    }    
}

