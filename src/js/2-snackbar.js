import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
let isSuccessSet = false;
let delaySet = 0;

form.addEventListener("input", (event) => {
    if (event.target.name === 'delay') delaySet = event.target.value;
    if (event.target.value === 'fulfilled') isSuccessSet = true;
    if (event.target.value === 'rejected') isSuccessSet = false;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isSuccess = isSuccessSet;
    const delay = delaySet;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) resolve(`✅ Fulfilled promise in ${delay}ms`);
            else reject(`❌ Rejected promise in ${delay}ms`);
        }, delay);
    });
    promise
        .then(value => iziToast.show({
            message: `${value}`,
            position: "topRight",
            messageColor: '#fff',
            icon: '',
            backgroundColor: '#59a10d'
        }))
        .catch(error => iziToast.show({
            message: `${error}`,
            position: "topRight",
            messageColor: '#fff',
            icon: '',
            backgroundColor: '#f16666'
        }))
        .finally(() => console.log("Promise settled"));
    form.reset();
});