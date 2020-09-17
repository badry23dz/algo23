let arr1 = [7,4,5,3,9,1];
let arr2 = [2,9,6,7,1,0];
let sum = 0;

  
for(let i = 0; i < arr1.length; i++){
  for(let j=0; j < arr2.length; j++){
    if(arr1[i] === arr2[j]){
      sum += arr1[i] + arr2[j];
    }
  }
}

console.log(sum) 