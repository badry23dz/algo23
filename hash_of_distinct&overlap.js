const set1 = [1,2,3,4];
const set2 = [5,8,4,2];

let sommeDistinct = 0;
let sommeOverlap = 0;

const obj = {
  1 : 1,
  2 : 2,
  3 : 1,
  4 : 2,
  5 : 1,
  8 : 1,
}

const arrKeys = Object.keys(obj);
const arrValues = Object.values(obj);

for(let i = 0; i< arrValues.length; i++){
  if(arrValues[i] === 1){
    sommeDistinct += parseInt(arrKeys[i])
  }
  else{
    sommeOverlap += parseInt(arrKeys[i])
  }
}
console.log(sommeDistinct);
console.log(sommeOverlap)