myFucn = (...arr) => {
    var evens = arr.filter(x => x % 2 === 0);
    var odds = arr.filter(x => x % 2 !== 0);
    console.log("Even: " + evens);
    console.log("Odd: " + odds);
    // console.log(typeof odds)
}

var arr = [1,3,2,4,55,47,21,-5,54,85,44,558];
myFucn(...arr);
