class Scroll {
    constructor(el) {
        this.nav = document.querySelector(el.nav);
        this.top = el.top
        this.unit = el.unit || '%'
        this.nav.style = `position:fixed;  top:${this.scrollUnit()}px`
        window.addEventListener('scroll', () => {
            this.scroll()
        })
        window.addEventListener('resize', () => {
            this.scroll()
        })

    }
    scroll() {
        const top = this.scrollUnit()
        if (top - window.scrollY > 0) {
            return this.nav.style.top = `${top - window.scrollY}px`
        } else {
            return this.nav.style.top = '0px'
        }
    }
    scrollUnit() {
        if (this.unit == "px") {
            return this.unit > 0 ? this.unit : 0
        } else if (this.unit == "%") {
            return (window.innerHeight / 100) * this.top - this.nav.clientHeight
        }
    }
}
new Scroll({
    nav: ".header__nav",
    top: 100,
    unit: "%"
})