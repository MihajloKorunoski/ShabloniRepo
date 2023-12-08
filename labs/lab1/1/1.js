document.addEventListener('DOMContentLoaded',function (){
    let intervalId
    const text = document.getElementById("deadline")

    function deadlineTimer() {
        const dateNow = new Date()
        const hours = 23 - dateNow.getHours()
        const minutes = 59 - dateNow.getMinutes()
        const seconds = 59 - dateNow.getSeconds()

        text.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    function startTimer() {
        if (intervalId) clearInterval(intervalId)
        intervalId = setInterval(deadlineTimer, 1000)
    }

    startTimer()
})
