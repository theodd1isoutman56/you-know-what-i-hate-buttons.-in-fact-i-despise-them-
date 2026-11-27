let buttonlock=false
const grid = document.getElementById("buttongrid")
const winningbutton = Math.floor(Math.random() * 100);
const message = document.getElementById("message");
const wrong = new Audio("wrong.mp3")
const clicky = new Audio("click.mp3")
const right = new Audio ("tada.mp3")
const flashbang = new Audio("flashbang.mp3")
const eas=new Audio("eas.mp3")
let timeout = [];
for (let i = 0; i < 100; i++) {
    const button = document.createElement("button");
    button.id = "button-" + i;

    if (i==winningbutton) {
        button.style.background = 'green';
    }

    button.addEventListener("click", () => {
        if (buttonlock) return;
        buttonlock = true;
        clicky.currentTime=0;
        clicky.play();
        if (i === winningbutton) {

            right.currentTime=0;
            right.play();
            grid.style.display='none';
            message.style.display='none';
            document.getElementById("title").style.display = "none";
            document.getElementById("subtitle").style.display = "none";
            document.getElementById("yay").style.display="block";
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


            timeout.push(setTimeout(() => {
                eas.currentTime=0;
                eas.play()
                let easy=1;
                eas.onended=() => {
                    if (easy<3) {
                        easy++;
                        eascurrentTime=0;
                        eas.play();
                    }
                };

                flashbang.currentTime=0;
                flashbang.play()
                const flash = document.getElementById("flash")
                flash.classList.remove("active");
                void flash.offsetWidth;
                flash.classList.add("active");
                setTimeout(() => {
                    grid.style.display='none';
                    message.style.display='none';
                    document.querySelector("h1").style.display ='none';
                    document.querySelector("h2").style.display='none';
                    document.getElementById("joever").style.display="block";

            }, 300);
         }, 11500));
            

        }
    })
    grid.appendChild(button);
}