
const countDown = () => {
    // promotion sales end time, May 5th, 2023 at 12:59am EST
    const final_time = new Date("2023-05-05T00:59:00");
    // current time
    const current_time = new Date();
    // calculate how many milliseconds left to
    const difference_time = final_time - current_time;

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    // trim number format
    const trim = (num) => {
        if (num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    };

    if (difference_time > 0) {
        days = Math.floor(difference_time / (1000 * 60 * 60 * 24));
        hours = Math.floor((difference_time / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((difference_time / 1000 / 60) % 60);
        seconds = Math.floor((difference_time / 1000) % 60);
    }


    document.getElementById('day').innerHTML = trim(days);
    document.getElementById('hour').innerHTML = trim(hours);
    document.getElementById('minute').innerHTML = trim(minutes);
    document.getElementById('second').innerHTML = trim(seconds);


}


const tick = setInterval(() => {
    countDown()
}, 1000);

const stopFunc = () => {
    clearInterval(tick)
}