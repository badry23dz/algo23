let htab1 = {
    '7': 0,
    '4': 1,
    '5': 2,
    '3': 3,
    '9': 4,
    '1': 5,
  };
  
  let set2 = [2,9,6,7,1,0]
  
  let totHtab = 0;
  
  for(let i = 0; i < set2.length ; i++){
    
    if(htab1[set2[i].toString()] !== undefined){
      
      totHtab += set2[i]
    };
    
  }
  totHtab = totHtab * 2;
  
  console.log(totHtab)
