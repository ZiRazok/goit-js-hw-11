import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputDate = document.querySelector("#datetime-picker");
const btnStart = document.querySelector('[data-start]');

let userSelectedDate = 0;
let intervalId;

const dataTimer = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]")
}
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            iziToast.warning({
                message: 'Please choose a date in the future',
                position: "topRight",
                theme: 'dark',
                backgroundColor: '#ef4040'
            });
        }
        else {
            if (userSelectedDate != selectedDates[0].getTime()) {
                clearInterval(intervalId);
                userSelectedDate = selectedDates[0].getTime();
                btnStart.disabled = false;
            }
        };
    },
};
flatpickr(inputDate, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

btnStart.addEventListener("click", () => {
    btnStart.disabled = true;
    intervalId = setInterval(() => {
        console.log(convertMs(userSelectedDate - new Date().getTime()));
        const reverseTimer = convertMs(userSelectedDate - new Date().getTime());
        if (reverseTimer.days == 0 && reverseTimer.hours == 0 && reverseTimer.minutes == 0 && reverseTimer.seconds == 0)
            clearInterval(intervalId);
        for (const key in dataTimer) {
            if (reverseTimer.hasOwnProperty(key)) dataTimer[key].textContent = String(reverseTimer[key]).padStart(2, "0");
        }
    }, 1000)
});