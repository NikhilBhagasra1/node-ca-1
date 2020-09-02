myFunc = (num1, num2, ...arr) => {
    arr.forEach(element => {
        if(element > num1 && element < num2){
            console.log(element)
        }
    });
}
var arr = [5,6,7,8,9,11,2,43,66,1];
myFunc(4,15,...arr);