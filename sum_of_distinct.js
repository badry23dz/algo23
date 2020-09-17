let arr1 = [7,4,5,3,9,1];
let arr2 = [2,9,6,7,1,0];
let sum1 = 0;
let arr = arr1.concat(arr2);
let sum2 = 0;

for(let i = 0; i < arr1.length; i++){
  for(let j=0; j < arr2.length; j++){
    if(arr1[i] === arr2[j]){
      sum1 += arr1[i] + arr2[j];
    }
  }
}
  
for(let i = 0;i < arr.length; i++){
  sum2 = sum2 + arr[i]
}

const sum = sum2 - sum1;

console.log(sum);
