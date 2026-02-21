let infoStudent = {
    name: "Alex",
    age: 15,
    points: [8,9,10,4,7],
    average: function(){
        let total = 0
        let count = 0
        for(i in this.points){
            total += this.points[i] 
            count++
        }
        console.log(total/count)
    },
    minPoint: function() {
        let min = this.points[0]

        for (let i in this.points) {
            if (this.points[i] < min) {
                min = this.points[i]
            }
        }

        console.log(min)
    }
}
infoStudent.average()
infoStudent.minPoint()