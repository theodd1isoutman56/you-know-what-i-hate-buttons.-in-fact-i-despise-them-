const grid = document.getElementById("buttongrid")
const winningbutton = Math.floor(Math.random() * 100);
for (let i = 0; i < 100; i++) {
    const button = document.createElement("button");
    button.id = "button-" + i;
    button.addEventListener("click", () => {
        if (i === winningbutton) {
            console.log("HUMANITY HAS BEEN SAVED");
        } else {
            console.log("YOU ABSOLUTE MORON.");

        }
    })
    grid.appendChild(button);
}