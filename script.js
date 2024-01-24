let box = document.getElementsByClassName("box")[0];
let array = [
    [], [], [], [], [], [], [], [],
];
console.log(box);
array.map((item, index) => {
    let one = document.createElement("div");
    one.addEventListener("click", () => onclick(index))
    box.appendChild(one);
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
}
)

function onclick(index) {
    if () {
        
    }else {

    }
}
