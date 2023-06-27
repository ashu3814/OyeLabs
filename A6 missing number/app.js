function getMissingNo(array, X) {
    let total = Math.floor((X + 1) * (X + 2) / 2);
    for (let i = 0; i < X; i++)
        total -= array[i];
    return total;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let array = Array.from({ length: 100 }, (_, index) => index + 1);
array = shuffleArray(array);
array.splice(Math.floor(Math.random() * 100), 1);
console.log(array)
let X = array.length;
let missingNumber = getMissingNo(array, X);
console.log("Missing number:", missingNumber);
