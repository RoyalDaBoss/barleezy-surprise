let step = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const music = document.getElementById("bg-music");

/* STORY PAGES */
const pages = [
  {
    title: "Hey Barleen… ❤️",
    text: "I made this for you.\nNot because it’s Valentine’s Day…\nBut because you deserve reminders of how loved you are."
  },
  {
    title: "My Barleen…",
    text: "I know today was supposed to feel special.\nAnd I’m sorry I couldn’t do something bigger."
  },
  {
    title: "The truth is…",
    text: "My funds were low.\nBut my love for you has never been.\nNot for a second."
  },
  {
    title: "I felt guilty.",
    text: "Because you do so much.\nYou care so deeply.\nAnd sometimes I don’t even know how I got lucky enough to have you."
  },
  {
    title: "You are rare.",
    text: "Barleen… you’re kind in a world that isn’t always kind.\nYou love in a way that feels safe.\nYou are genuinely one of a kind."
  },
  {
    title: "I want you to know…",
    text: "Even if I can’t buy the biggest gifts right now,\nI will always find ways to make you feel loved.\nBecause you matter to me more than anything."
  },
  {
    title: "You’re my favorite person.",
    text: "My best friend.\nMy comfort.\nThe girl I think about when I picture the future."
  },
  {
    title: "And I promise you this…",
    text: "This isn’t the end of what I want to give you.\nOne day I’m going to spoil you the way you deserve.\nThis is just a chapter, not the whole story."
  },
  {
    title: "Choose a Surprise 💝",
    text: "Tap one, my love:",
    menu: true
  }
];

/* START EXPERIENCE */
function startExperience() {
  music.play();
  nextPage();
}

/* NEXT PAGE */
function nextPage() {
  const page = pages[step];

  title.innerText = page.title;
  text.innerText = page.text;

  if (page.menu) {
    buttons.innerHTML = `
      <button onclick="reasons()">10 Reasons I Love You</button>
      <button onclick="future()">Our Future Together</button>
      <button onclick="funny()">Funny Moment 😂</button>
      <button onclick="secret()">Secret Message 🔒</button>
      <button onclick="forgive()">Final Question 💗</button>
    `;
  } else {
    buttons.innerHTML = `<button onclick="continueStory()">Continue ➜</button>`;
  }

  step++;
}

/* CONTINUE */
function continueStory() {
  if (step < pages.length) nextPage();
}

/* MENU OPTIONS */
function reasons() {
  title.innerText = "10 Reasons I Love You ❤️";
  text.innerText =
    "1. Your heart is pure.\n2. You care so deeply.\n3. You make me feel safe.\n4. Your laugh is my favorite sound.\n5. You’re my peace.\n6. You’re my best friend.\n7. You believe in me.\n8. You’re beautiful beyond words.\n9. Life is better with you.\n10. I love you the most, always Barleen.";
}

function future() {
  title.innerText = "Our Future 💍";
  text.innerText =
    "Barleen… one day we’ll look back at moments like this.\nNot at what we bought,\nBut at how real our love was.\n\nI want a future full of laughs, late-night talks, and memories.\nI promise I’ll make it up to you soon.";
}

function funny() {
  title.innerText = "Our Inside Joke 😂";
  text.innerText =
    "BEEFIN WITH MY CHICK WHEN IM IN JAILLL 😭😭\n\nAND I HAVE NOTTHHHINGGYG 💀\n\nNo matter what…\nYou’re my favorite person to laugh with.\nI love you Barleen.";
}

function secret() {
  title.innerText = "🔒 Only for Barleen…";
  text.innerText =
    "If nobody told you today…\n\nYou are enough.\nYou are loved.\nAnd you are my favorite blessing in this life.\n\nThank you for being you, Barleen.\nI love you the most.";
}

/* FINAL QUESTION */
function forgive() {
  title.innerText = "Will you forgive me Barleen? 💗";
  text.innerText =
    "I love you more than anything.\nAnd I promise this isn’t the end.\nThis is just the start.\n\nYou deserve the world…\nAnd I’ll spend my life proving that.";

  buttons.innerHTML = `
    <button onclick="yes()">Yes ❤️</button>
    <button onclick="yes()">Of course 💞</button>
  `;
}

/* ENDING */
function yes() {
  title.innerText = "😭💖 Come here my love…";
  text.innerText =
    "Thank you for forgiving me Barleen.\n\nHappy Valentine’s Day.\nI love you more than anything.\n\nForever yours,\nDaman ❤️";

  buttons.innerHTML = "";

  // Heart explosion
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "30px";
    heart.style.animationDuration = "2s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

/* FLOATING HEARTS GENERATOR */
function createHearts() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
  }, 350);
}

createHearts();
