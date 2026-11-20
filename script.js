// const DESIGN_WIDTH = 1920;

//     function applyScale() {
//       const scale = window.innerWidth / DESIGN_WIDTH;
//       document.querySelector(".page").style.zoom = scale;
//     }

//     applyScale();
//     window.addEventListener("resize", applyScale);

// звук при ховерах
const soundH = document.getElementById("sound-h");
const soundCat = document.getElementById("sound-cat");
const soundBtn = document.getElementById("sound-btn");

function playSound(audio, volume = 5) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}

// 1. Звук ТОЛЬКО для клавиши H
document.querySelectorAll(".h").forEach((el) => {
  el.addEventListener("pointerdown", () => playSound(soundH, 1));
});

// 2. Звук ТОЛЬКО для картинки с котом (добавь ей класс cat)
document.querySelectorAll(".cat").forEach((el) => {
  el.addEventListener("pointerdown", () => playSound(soundCat, 1));
});

// 3. Общий звук для всех остальных клавиш и кнопок
const allButtons = document.querySelectorAll(
  "a, button, .a, .w, .s, .d, .c, .f, .esc, .space, .shift",
);

allButtons.forEach((el) => {
  if (el.classList.contains("h") || el.classList.contains("cat")) return;

  el.addEventListener("pointerdown", () => playSound(soundBtn, 1));
});

// звук при ховерах конец
