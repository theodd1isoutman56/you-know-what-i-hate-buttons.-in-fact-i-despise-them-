const grid = document.getElementById("buttongrid")
const winningbutton = Math.floor(Math.random() * 100);
const message = document.getElementById("message");
const wrong = new Audio("wrong.mp3")
const clicky = new Audio("click.mp3")
const right = new Audio ("tada.mp3")


let timeout = [];
for (let i = 0; i < 100; i++) {
    const button = document.createElement("button");
    button.id = "button-" + i;
    button.addEventListener("click", () => {
        clicky.currentTime=0;
        clicky.play();
        if (i === winningbutton) {
            right.currenTime=0;
            right.play();
            message.textContent=("HUMANITY HAS BEEN SAVED");
        } else {
            wrong.currentTime=0;
            wrong.play()
            timeout.forEach(clearTimeout);
            timeout=[];

            message.textContent = (" ");
            timeout.push(setTimeout(() => {
                message.textContent = ("YOU")
            }, 7000));

            timeout.push(setTimeout(() => {
                message.textContent = ("oh my god OH MY GOD")
            
            }, 4500))

            timeout.push(setTimeout(() => {
                message.textContent = ("NO NO NO NO NO ")
            }, 6000))

            timeout.push(setTimeout(() => {
                message.textContent = ("wait")
            }, 2500))

            timeout.push(setTimeout(() => {
                message.textContent = ("FREAKING")
            
            }, 8000))

            timeout.push(setTimeout(() => {
                message.textContent = ("MORON.")
            }, 9000))

            timeout.push(setTimeout(() => {
                message.textContent = ("DO YOU NOT REALISE WHAT YOUVE DON-")
            }, 10000))

            
        }
    })
    grid.appendChild(button);
}