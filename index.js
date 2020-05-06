
const N = 100;
var arr1=[]


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

while (arr1.length<N) {
    var number = getRandom(1,N+1)
    if(!arr1.includes(number)) arr1.push(number);
}


const arr2 = arr1.map((cur,index)=>{
    return arr1[arr1.length-index-1];
})


const arr3 = arr2.map((cur,index)=>{
    return arr1[index] - arr2[index];
})

let average3 = arr3.reduce((acc,n)=>{
    return acc + n;
})

average3/=N;

console.log(arr1);

console.log(arr2);

console.log(arr3);

console.log(average3);

