const newYears = '1 Jan 2024';

function countdown(){
    // this new Date always return milliseconds
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    // milliseconds to seconds.
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const seconds  = Math.floor(totalSeconds) % 60;

    // seconds to minutes.
    const mins = Math.floor(totalSeconds/60) % 60;

    // seconds to hours.
    const hours = Math.floor(totalSeconds/3600) % 24;

    // seconds to days
    const days = Math.floor(totalSeconds/60/60/24);

    document.getElementById("seconds").innerText = formatTime(seconds);
    document.getElementById("mins").innerText = formatTime(mins);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("days").innerText = formatTime(days);
}

// example 8 --> 08;
function formatTime(time){
    if(time<10){
        return `0${time}`;
    }
    else{
        return time;
    }
}

// Initial call
countdown();

setInterval(countdown, 1000);
