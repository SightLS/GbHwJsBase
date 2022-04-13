const arr = [];

for (let i = 0; i < 5; i++) {
    
   arr.push(getNumbers());
    
}       

function getNumbers() {
    return Math.floor(Math.random() * (10 - 0) + 0);
}

console.log(arr);

const arrReworked = arr.filter(item => item !== 3);

console.log(arrReworked.map(element => element += element * 0.1));