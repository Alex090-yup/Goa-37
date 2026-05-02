function func(a,b){
    return {
        add(){
            return a+b
        },
        minus(){
            return a-b
        }
    }
}

const nums1 = func(3,6)
const nums2 = func(10,7)
const nums3 = func(9,1)

console.log(nums1.add())
console.log(nums1.minus())

console.log(nums2.add())
console.log(nums2.minus())

console.log(nums3.add())
console.log(nums3.minus())

