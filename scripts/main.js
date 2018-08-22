let numSquares = 6;
let colors;
let squares = document.querySelectorAll('.square');
let pickedColor;
let colorDisplay = document.getElementById('colorDisplay');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeBtns = document.querySelectorAll('.mode');
init();

  function init() {
    //mode buttons event listener
    setUpModeBtns();
    setUpSquares();
    reset();
  }

  function setUpModeBtns() {
    for(var i = 0; i < modeBtns.length; i++) {
      modeBtns[i].addEventListener('click', function() {
        modeBtns[0].classList.remove('selected');
        modeBtns[1].classList.remove('selected');
        this.classList.add(`selected`);
        this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
        reset();
      });
    }
  }

  function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
          message.textContent = 'Correct!';
          resetButton.textContent = 'Play Again?';
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
        } else {
          this.style.backgroundColor = 'snow';
          message.textContent = 'Try Again';
        }
      });
    }
  }

  function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    resetButton.textContent = 'New Colors';
    message.textContent = '';
    for (var i = 0; i < squares.length; i++) {
      if(colors[i]){
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = 'none';
      }
    }
    h1.style.backgroundColor = 'steelblue';
  }

  resetButton.addEventListener('click', function() {
    reset();
  });

  function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
  }

  function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
  }

  function generateRandomColors(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(randomColor());
    }
    return arr;
  }

  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random() * 9) + 1;
    return `rgb(${r}, ${g}, ${b})`;
  }
