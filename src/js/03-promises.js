import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', submitCreatePromises);


function submitCreatePromises(e){
  e.preventDefault();
 
  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);

for (let position = 1; position <= amount; position++) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
    setTimeout(() => {
      Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
        );
    }, delay)
  })
  .catch(({ position, delay }) => { 
    setTimeout(() => {
      Notify.failure(
        `❌ Rejected promise ${position} in ${delay}ms`
        );
    }, delay) 
  });
delay += step;
}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promiseValue = {position, delay};

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseValue);
    }
      reject(promiseValue);
  })
}
// const form = document.querySelector('.form');

// const firstDelayMs = document.querySelector('[name="delay"]');
// //const delayStepMs = document.querySelector('[name="step"]');
// //const amount = document.querySelector('[name="amount"]');
// form.addEventListener('submit', submitCreatePromises);

// // Loop to create promises from function createPromise after event listener

// function submitCreatePromises(e) {

//   e.preventDefault();

//   let delay = Number(e.currentTarget.delay.value);
//   let step = Number(e.currentTarget.step.value);
//   let amount = Number(e.currentTarget.amount.value);

//   for (let position = 1; position <= amount; position++) {
//     createPromise(position, delay)
//       .then(({ position, delay }) => {
//         Notiflix.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       // createPromise(2, 1500)
// //   .then(({ position, delay }) => {
// //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// //   })
// //   .catch(({ position, delay }) => {
// //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// //   });

//       .catch(({ position, delay }) => {
//         Notiflix.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//     delay += step;
//   }
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//     // Fulfill
//     let promiseValue = {position, delay};
    
//     return new Promise((resolve, reject) => {
//     if (shouldResolve) {
//       resolve(promiseValue);
//   } 
//   else {
//     // Reject
//     reject(promiseValue);
//   })
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
  
