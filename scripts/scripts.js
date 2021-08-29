import Countdown from "./countdown.js"

const timeToEvent = new Countdown("04 February 2022 20:00:00 GMT-0300")
const timestamps = document.querySelectorAll('[data-time]')

function showTime() {
  timestamps.forEach((time, index) => {
    time.innerHTML = timeToEvent.total[index]
  })
}

showTime()
setInterval(showTime, 1000)
