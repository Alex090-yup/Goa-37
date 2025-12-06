let lst = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900];
let num = 1000;

for (let index = 0; index < lst.length; index++) {
    if (num < lst[index]) {
        console.log(lst[index]);
    }
    else{
        console.log(num);
    }
}
