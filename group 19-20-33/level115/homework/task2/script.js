const robot = {
    model: "XCY-45",
    sayModel(){
        console.log(`ჩემი სახელია ${this.model}`)
    },
    year: 2004,
    sayModel2: ()=> {
        console.log(`ჩემი წელია ${this.year}`)
    }
}

robot.sayModel()
robot.sayModel2() // undefined.