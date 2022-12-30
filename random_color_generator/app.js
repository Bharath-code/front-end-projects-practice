const colorBtn = document.querySelector("#btn-1");
const boxes = document.querySelectorAll(".boxes");
let isRunning = false;

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const start = () => {
  if (isRunning) {
    boxes.forEach((box) => {
      box.style.background = getRandomColor();
    });
    setTimeout(start, 500);
  }
};

colorBtn.addEventListener("click", () => {
  colorBtn.innerHTML = "STOP";
  if (isRunning) {
    isRunning = false;
    colorBtn.innerHTML = "CHANGE COLOR";
  } else {
    isRunning = true;
    start();
  }
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!isRunning) {
      const copyColor = box.style.background;
      console.log("copyColor", copyColor);
      // Copy the text to the clipboard
      navigator.clipboard.writeText(copyColor);
      box.innerHTML = "Copied";
      box.style.opacity = "0.5";
    }
  });
});
