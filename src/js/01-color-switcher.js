
  const btnStart = document.querySelector('button[data-start]');
  const btnStop = document.querySelector('button[data-stop]');
  const body = document.querySelector('body');
  
  let timerId = null;
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  function changeBackgroundColor () {
    body.style.backgroundColor = getRandomHexColor();
    //body.style.color = getRandomHexColor();
  };
  
  
  btnStart.addEventListener('click', () => {
    timerId = setInterval(changeBackgroundColor, 1000);
    btnStart.disabled = true;
  });
  
  
  btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.disabled = false;
  });
  
