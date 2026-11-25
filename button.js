const grid = document.getElementById("buttongrid")
const winningbutton = Math.floor(Math.random() * 100);
const message = document.getElementById("message");
for (let i = 0; i < 100; i++) {
    const button = document.createElement("button");
    button.id = "button-" + i;
    button.addEventListener("click", () => {
        if (i === winningbutton) {
            message.textContent=("HUMANITY HAS BEEN SAVED");
        } else {
            message.textContent = ("YOU ABSOLUTE MORON.");

        }
    })
    grid.appendChild(button);
}