// Описаний в документації
// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

//import Notiflix from 'notiflix';
//import { Notify } from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
  const dataDays = document.querySelector('[data-days]');
  const dataHours = document.querySelector('[data-hours]');
  const dataMinutes = document.querySelector('[data-minutes]');
  const dataSeconds = document.querySelector('[data-seconds]');
  
  let userDate = null;
  btnStart.disabled = true 
  
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0] < Date.now()) {
        Notify.failure('Please choose a date in the future'); 
        btnStart.disabled = true;
        userDate = new Date(); 
    } else { 
        btnStart.disabled = false;
        userDate = selectedDates[0];

        btnStart.addEventListener('click', countdownTime);
 
    function countdownTime() {
      const timerId = setInterval(() => {
        btnStart.disabled = true;
            const dateChoosenMs = new Date(inputEl.value.replace(/-/g, '/')).getTime();
            const now = new Date().getTime();
            const timeLeft = dateChoosenMs - now;
  
            const { days, hours, minutes, seconds } = convertMs(timeLeft);
  
            dataDays.innerHTML = days < 10 ? addLeadingZero(days) : days;
            dataHours.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
            dataMinutes.innerHTML = minutes < 10 ? addLeadingZero(minutes) : minutes;
            dataSeconds.innerHTML = seconds < 10 ? addLeadingZero(seconds) : seconds;
  
            if (timeLeft < 1000) {
              clearInterval(timerId);
              btnStart.disabled = false;
              //return
            }
          }, 1000);
  }


 //Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  
  // Напиши функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
     }
    }   
    },
};
  flatpickr(inputEl, options);