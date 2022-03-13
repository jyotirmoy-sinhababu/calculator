//selectors
let screen = document.querySelector('#screen');
let panel = document.querySelector('.panel');
let btn = document.querySelectorAll('.btn');
let equal = document.querySelector('.result');
let allClear = document.querySelector('.allClear');
let clear = document.querySelector('.clear');

equal.addEventListener('click', () => {
  screen.innerText = eval(screen.innerText);
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    screen.innerText += btn[i].value;
  });
}

allClear.addEventListener('click', () => {
  screen.innerText = '';
});

clear.addEventListener('click', () => {
  let display = screen.innerText;
  let result = display.slice(0, -1);
  screen.innerText = result;
});
