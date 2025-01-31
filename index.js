function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function sendLove() {
  let name = "Tanisha";
  // let name = getQueryParam("name");
  let message = document.getElementById("message");
  message.innerHTML = "You're loved,"+name+"!";
  setTimeout(() => {
    message.style.opacity = 1;
  }, 100);

  for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 100);
  }
}

sendLove();

