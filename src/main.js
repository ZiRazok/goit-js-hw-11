import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import pixabayApiFunction from "/js/pixabay-api";
import renderElements from "/js/render-functions";


const openSearchBtn = document.querySelector('.open-search');
const mainForm = document.querySelector('.main-form');
const mainInput = document.querySelector('.main-form-input');
const mainList = document.querySelector('.main-list')

let inputValue;

function toggleIsOpen() { mainForm.classList.toggle('isOpen'); mainForm.reset(); }

openSearchBtn.addEventListener("click", () => { toggleIsOpen(); mainInput.focus(); });

document.addEventListener('keyup', (event) => {
    if (mainForm.classList.contains('isOpen')) if (event.key === 'Escape') toggleIsOpen();
});

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!mainInput.value) {
        iziToast.warning({
            message: 'The input field cannot be empty!',
            position: "topRight",
            theme: 'dark',
            backgroundColor: '#ef4040'
        });
        return;
    };
    inputValue = mainInput.value;
    toggleIsOpen();

    pixabayApiFunction(inputValue)
        .then(post => {
            if (post.hits.length == 0) {
                iziToast.warning({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight",
                    theme: 'dark',
                    backgroundColor: '#ef4040'
                });
                throw new Error('Cannot found');
            };
            console.log(post.hits);
            mainList.insertAdjacentHTML("beforeend", renderElements(post.hits).join(""));
            var lightbox = new SimpleLightbox('.main-list a', { captionsData: 'alt' });
            lightbox.refresh();
        })
        .catch(error => console.log("ERROR:", error));
});