

// звук при ховерах
const soundH = document.getElementById("sound-h");
const soundCat = document.getElementById("sound-cat");
const soundBtn = document.getElementById("sound-btn");

function playSound(audio, volume = 1) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}


document.querySelectorAll(".h").forEach((el) => {
  el.addEventListener("pointerdown", () => playSound(soundH, 1));
});


document.querySelectorAll(".cat").forEach((el) => {
  el.addEventListener("pointerdown", () => playSound(soundCat, 1));
});


const allButtons = document.querySelectorAll(
  "a, button, .a, .w, .s, .d, .c, .f, .esc, .space, .shift",
);

allButtons.forEach((el) => {
  if (el.classList.contains("h") || el.classList.contains("cat")) return;

  el.addEventListener("pointerdown", () => playSound(soundBtn, 1));
});

// звук при ховерах конец
