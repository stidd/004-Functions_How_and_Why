function randomHex() {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    return nums[Math.floor(Math.random() * 16)].toString()
}
console.log(randomHex())


//this one uses the first one twice and puts the two together
//uncomment the console.log below to see it work.
function twoDigitRandomHex() {
    return randomHex() + randomHex();
}

//console.log(twoDigitRandomHex())

// Make your function here!! 











//DO NOT MODIFY BELOW THIS
module.exports = threeDigitRandomHex;