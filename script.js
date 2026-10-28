/* 16x16 grid of divs using flexbox */

let body = document.querySelector("body")
let container = document.querySelector(".container")

for (let i=0; i<256; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "cadetblue";
    })
    container.appendChild(div);
}

body.appendChild(container);