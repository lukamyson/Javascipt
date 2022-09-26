class Human {
    constructor(el) {
        this.name = el.name
        this.age = el.age
        this.job = el.job
        console.log(this.info());
    }
    info() {
        return `Hello my name is ${this.name}. I'm ${this.age} years old My job is ${this.job}`
    }
}
new Human({
    name: "Bahriddin",
    age: 22,
    job: "Betayin"
})
new Human({
    name: "Abdulbosit",
    age: 22,
    job: "Dangasa"
})
