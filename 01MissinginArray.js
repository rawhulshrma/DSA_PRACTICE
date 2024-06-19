class solution{
    constructor(n,arr){
        this.n=n;
        this.arr = arr
    }
    missingNumber() {
let totalSum = (this.n*(this.n+1))/2

let arraySum = 0

for (let i=0;i<this.arr.length;i++){
arraySum+=arr[i]

}
let missingArray = totalSum-arraySum
return missingArray
    }

}
let n = 5; // 1 से 5 तक के नंबर होने चाहिए
let arr = [1, 2, 3, 5];
let handler = new solution(n, arr);
console.log(handler.missingNumber());