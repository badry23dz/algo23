let arr1 = [1,2,3,4];
let arr2 = [3,4,0,5];
let sum = 0;


for (let i = 0; i < arr1.length; i++) {
  
  if (arr2.indexOf(arr1[i]) === -1)
  sum += arr1[i]
}
console.log(sum)

for (let i = 0; i < arr2.length; i++) {

  if (arr1.indexOf(arr2[i])=== -1)
  sum += arr2[i]
}
console.log(sum)