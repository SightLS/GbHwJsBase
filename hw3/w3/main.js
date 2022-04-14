const arr = [];

for (let i = 0; i < 5; i++) {
   arr.push(Math.pow(getNumbers(), 2));
    
}

function getNumbers() {
    return Math.floor(Math.random() * (10 - 0) + 0);
}

console.log(arr);



const arrTest = [];
for (let i = 0; i < 5; i++) {
    arrTest.push(getNumbers());
     
 }
 console.log(`${arrTest} до возведения в степень`);

 arrTest.forEach(function(item, i, element) {
    element[i] = Math.pow(item, 3);
 });
 console.log(`${arrTest} после возведения в степень`);



