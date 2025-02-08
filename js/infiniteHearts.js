// create an empty div and id it as hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.zIndex = Math.random() * 2;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function sendLove() {
    let message = document.getElementById("hearts");

    message.innerHTML = "";

    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
}

sendLove();

