const countdown = function() {
    const timer = document.getElementById("timer");
    timer.textContent = timer.textContent - 1;
    if (timer.textContent < 0){
        alert("Вы победили в конкурсе!");
        clearInterval(countdownPerSecond);
        timer.textContent = 0;
    }
}

const countdownPerSecond = setInterval(countdown, 1000);