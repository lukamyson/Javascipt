class Typing {
    constructor(el) {
        this.title = document.querySelector(el.title);
        this.interval = el.interval || 200
        this.delay = el.delay == undefined ? 1000 : el.delay

        this.text = this.title.innerHTML.trim()
        this.title.innerHTML = ""
        setTimeout(() => {
            this.write()
        }, this.delay);
    }
    write(i = 0) {
        this.title.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i)
            }, this.interval);
        }
    }
}
new Typing({
    title: '.header__content h1',
    interval: 300,
    delay: 1000
})
