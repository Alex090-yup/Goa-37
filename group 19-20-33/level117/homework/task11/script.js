function createRobot(name) {
    return {
        name,
        _battery: 100,
        get battery() {
            return `Battery: ${this._battery}%`
        },
        work() {
            if (this._battery < 15) {
                return "დაიტენე!"
            }

            this._battery -= 15
        }
    }
}

const robot = createRobot("QYC-56")
console.log(robot.battery)
robot.work()
console.log(robot.battery)
