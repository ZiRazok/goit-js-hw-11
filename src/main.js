// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

const openSearchBtn = document.querySelector('.open-search');
const mainForm = document.querySelector('.main-form');
const mainInput = document.querySelector('.main-form-input');

let inputValue;

function toggleIsOpen() { mainForm.classList.toggle('isOpen'); mainForm.reset(); }

openSearchBtn.addEventListener("click", () => { toggleIsOpen(); mainInput.focus(); });

document.addEventListener('keyup', (event) => {
    if (mainForm.classList.contains('isOpen')) if (event.key === 'Escape') toggleIsOpen();
});

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!mainInput.value) { alert('Please enter text in search area'); return; };
    inputValue = mainInput.value;
    toggleIsOpen();
    console.log(`Search: ${inputValue}`);
});