'use strict';

const advice = document.querySelector('.advice');
const adviceId = document.querySelector('.advice__id');
const adviceDetail = document.querySelector('.advice__detail');
const button = document.querySelector('.button');
const divider = document.querySelector('.divider');

let slip;

const renderError = function () {
  advice.insertAdjacentText(
    'afterbegin',
    'Problem getting the advice. Please try again!'
  );
};

const getAndDisplayAdvice = async function () {
  try {
    //Get the advice
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    // if (!res) throw new Error("Problem getting the advice. Please try again");
    slip = data.slip;

    //Display the advice
    adviceId.textContent = `Advice#${slip.id}`;
    adviceDetail.textContent = slip.advice;
  } catch (err) {
    renderError();
  }
};

getAndDisplayAdvice();

window.addEventListener('resize', function () {
  if (window.innerWidth < 500) {
    const markup = `
    <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
              </g>
              </g>
      </svg>
    `;
    divider.innerHTML = '';
    divider.insertAdjacentHTML('afterbegin', markup);
  } else {
    const markup = `
    <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
    `;
    divider.innerHTML = '';
    divider.insertAdjacentHTML('afterbegin', markup);
  }
});

button.addEventListener('click', function () {
  getAndDisplayAdvice();
});
