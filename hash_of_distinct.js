let htab1 = {
    '7': 0,
    '4': 1,
    '5': 2,
    '3': 3,
    '9': 4,
    '1': 5,
  };
  
  let set2 = [2,9,6,7,1,0];
  
  let totHtab1 = 0;
  
  for(let i = 0; i < set2.length ; i++){
    
    if(!(htab1[set2[i].toString()] !== undefined)){
      totHtab1 += set2[i];
    };
    
  }
    
  let htab2 = {
    '2': 0,
    '9': 1,
    '6': 2,
    '7': 3,
    '1': 4,
    '0': 5,
  };
  let set1 = [7,4,5,3,9,1];
  
  let totHtab2 = 0;
  
  for(let i = 0; i < set1.length ; i++){
    
    if(!(htab2[set1[i].toString()] !== undefined)){
      totHtab2 += set1[i]
    };
  }
  
  const totHtab = totHtab1 + totHtab2
  console.log(totHtab)