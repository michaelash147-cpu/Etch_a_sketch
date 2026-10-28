/* 16x16 grid of divs using flexbox */

let body = document.querySelector("body")
let container = document.querySelector(".container")

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.maxWidth = "1350px";
container.style.justifyContent = "center";
container.style.alignItems = "center";

for (let i=0; i<256; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = "pink";
    div.style.height = "80px";
    div.style.width = "80px";
    div.style.border = "1px dashed black";
    container.appendChild(div);
}






body.appendChild(container);