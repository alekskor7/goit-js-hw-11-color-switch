const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let intervalId = null;
let switchStarted = false;

function onStartBtnClick() {
  if (switchStarted) {
    return;
  }
  intervalId = setInterval(setRandomColor, 1000);
  switchStarted = true;
  updateStartBtnStatus();
}

function onStopBtnClick() {
  clearInterval(intervalId);
  switchStarted = false;
  updateStartBtnStatus();
}

function updateStartBtnStatus() {
  refs.startBtn.disabled = switchStarted;
}

function setRandomColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}
