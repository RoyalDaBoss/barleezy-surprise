const title = document.getElementById("title");
const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

let currentPage = 0;

/* Pages */
const pages = [
  {
    title: "Barleen… 💗",
    text: "Hey my love.\nI made this just for you.\nNot because it’s Valentine’s Day…\nBut because you deserve something special."
  },
  {
    title: "My Barleezy 💖",
    text: "I know today is supposed to feel big.\nAnd I’m sorry I couldn’t do everything I wanted."
  },
  {
    title: "The truth is…",
    text: "My funds were low.\nBut my love for you has never been.\nNot even for a second."
  },
  {
    title: "You’re amazing.",
    text: "Barleen, you’re kind.\nYou’re caring.\nYou make life feel softer just by being in it."
  },
  {
    title: "I appreciate you.",
    text: "You do so much.\nYou love so deeply.\nAnd I never want you to forget how much you mean to me."
  },
  {
    title: "Inside joke moment 😭",
    text: "BEEFIN WITH MY CHICK WHEN IM IN JAILLL\n…I HAVE NOTTHHHINGGYG 😭💀\nBut even when I have nothing…\nI still have love for you."
  },
  {
    title: "Barleen…",
    text: "You’re my favorite person.\nMy comfort.\nMy best friend.\nThe one I want in my future."
  },
  {
    title: "Choose what you want 💝",
    text: "Tap one, my love:",
    menu: true
  }
];

/* Render Page */
function renderPage() {
  const page = pages[currentPage];
  title.innerText = page.title;
  text.innerText = page.text;

  buttons.innerHTML = "";

  if (page.menu) {
    buttons.innerHTML = `
      <button onclick="secret()">🔒 Secret Message</button>
      <button onclick="datePromise()">🌹 Promise Date</button>
      <button onclick="forgive()">💗 Final Question</button>
    `;
  } else {
    buttons.innerHTML = `<button onclick="nextPage()">Next 💌</button>`;
  }
}

function nextPage() {
  currentPage++;
  if (currentPage < pages.length) {
    renderPage();
  }
}

/* Secret */
function secret() {
  title.innerText = "Only for Barleen… 🔒";
  text.innerText =
    "If nobody told you today…\n\nYou are enough.\nYou are loved.\nAnd you are my favorite blessing.\n\nI love you the most, Barleen 💗";

  buttons.innerHTML = `<button onclick="renderPage()">Back 💞</button>`;
}

/* Promise Date */
function datePromise() {
  title.innerText = "A Promise 🌹";
  text.innerText =
    "Barleen…\nThis isn’t the end.\nI promise you a real date soon.\nA day where it’s all about you.\n\nBecause you deserve that.\nAlways.";

  buttons.innerHTML = `<button onclick="renderPage()">Back 💞</button>`;
}

/* Forgiveness Question */
function forgive() {
  title.innerText = "Barleen… will you forgive me? 💗";
  text.innerText = "Choose honestly 😭";

  buttons.innerHTML = `
    <button onclick="yes()">Yes 💖</button>
    <button onclick="no()">No 😡</button>
  `;
}

/* Yes Ending */
function yes() {
  title.innerText = "😭💖 Come here my love…";
  text.innerText =
    "Thank you for forgiving me Barleen.\n\nHappy Valentine’s Day.\nI love you more than anything.\n\nForever yours,\nDaman ❤️";

  buttons.innerHTML = "";

  heartExplosion();
}

/* No */
function no() {
  title.innerText = "NO IS NOT AN OPTION 😭";
  text.innerText =
    "Barleen stop playing.\nYou know I love you too much.\nTry again 💀";

  buttons.innerHTML = `<button onclick="forgive()">Okay okay 😭</button>`;
}

/* Floating Hearts Continuous */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

/* Heart Explosion */
function heartExplosion() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "30px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

/* Music Button Fix */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  music.play();
  musicBtn.style.display = "none";
});

/* Start */
renderPage();
