const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    digMin = document.querySelector('.minutes'),
    digHour = document.querySelector('.hours'),
    digSeconds = document.querySelector('.seconds');



function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minut = time.getMinutes() * 6,
        hours = time.getHours() * 30;
    min.style = `transform:rotate(${minut}deg)`
    sec.style = `transform:rotate(${second}deg)`
    hour.style = `transform:rotate(${hours}deg)`

    digMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    digHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    digSeconds.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    setTimeout(() => clock(), 10)

}
clock()
const link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let x = 0; x < link.length; x++) {
            link[x].classList.remove('active');
            tabs[x].classList.remove('active')
        }
        tab(this, tabs[i])
    })
}
function tab(el, arr) {
    el.classList.add('active')
    arr.classList.add('active')
}

/* sekundamer*/

const seconds = document.querySelector('.stopwatch__seconds'),
    minutes = document.querySelector('.stopwatch__minutes'),
    hours = document.querySelector('.stopwatch__hours'),
    btn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');
let number = 0

btn.addEventListener('click', () => {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        setTimeout(() => stopwatch(), 1000)
    } else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    } else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        seconds.innerHTML = 0
        minutes.innerHTML = 0
        hours.innerHTML = 0
        number = 0

    }

})
function stopwatch() {
    if (btn.innerHTML == 'stop') {
        if (number == 59) {
            number = 0
            seconds.innerHTML = number
            if (minutes.innerHTML == 59) {
                minutes.innerHTML = 0
                hours.innerHTML++

            } else {
                minutes.innerHTML++
            }

        } else {
            number++
            seconds.innerHTML = number
        }
        setTimeout(() => stopwatch(), 1000)
    }
}
