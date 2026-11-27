let buttonlock=false
const grid = document.getElementById("buttongrid")
const winningbutton = Math.floor(Math.random() * 100);
const message = document.getElementById("message");
const talk = new Audio("talk.wav");
talk.volume = 0.25
function typewriter(text, speed=40) {
    message.textContent="";
    let i=0;
    const typing=setInterval(() => {
        message.textContent += text.charAt(i); //i used some ai round these parts since i didnt know how to make a typewriter writing effect... ive learned how to do it know tho :P
        talk.currentTime=0;
        talk.play()
        i++;

        if (i >= text.length) {
            clearInterval(typing);
            buttonlock=false;
        }
    }, speed);
}

const wrong = new Audio("wrong.mp3")
const clicky = new Audio("click.mp3")
const right = new Audio ("tada.mp3")
const flashbang = new Audio("flashbang.mp3")
const eas=new Audio("eas.mp3")
const start = document.getElementById("start");
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

            typewriter(" ");
            timeout.push(setTimeout(() => {
                typewriter("YOU")
            }, 7000));

            timeout.push(setTimeout(() => {
                typewriter("oh my god OH MY GOD")
            
            }, 4500))

            timeout.push(setTimeout(() => {
                typewriter("NO NO NO NO NO ")
            }, 6000))

            timeout.push(setTimeout(() => {
                typewriter("wait")
            }, 2500))

            timeout.push(setTimeout(() => {
                typewriter("FREAKING")
            
            }, 8000))

            timeout.push(setTimeout(() => {
                typewriter("MORON.")
            }, 9000))

            timeout.push(setTimeout(() => {
                typewriter("DO YOU NOT REALISE WHAT YOUVE DON-")
            }, 10000))


            timeout.push(setTimeout(() => {
                eas.currentTime=0;
                eas.play()
                let easy=1;
                eas.onended=() => {
                    if (easy<3) {
                        easy++;
                        eas.currentTime=0;
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

start.addEventListener("click", () => {
    document.getElementById("main").style.display='none';
    document.getElementById("message").style.display='block';
    buttonlock = true;
    typewriter("You've been selected for a not so secret government mission. Aliens, Nukes, Tsunamis, Kanye West, you name it, they're ALL coming after you, and life as a whole. But fret not! One of those buttons instantly saves humanity. I have no clue which, but one of them does. Its your job to pick. Just so you know, if you pick the wrong button, you WILL be held criminally liable for all forthcoming damage caused by the other disasters, and WILL be promptly executed, tortured, and/or offered as a sacrifice. No pressure!", 55)
    
    document.getElementById("title").style.display='block';
    document.getElementById("subtitle").style.display='block';
    grid.style.display='grid';
});