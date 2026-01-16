/*
  Creates a Value Array with desired amount of indices and a custom value for each Index.
*/
    
    
    const arrayValue = 100;
    const indexNum = 30;
    
   
    const arrayId = api.create("valueArray", "Value Array");
      
            Array.from({length: indexNum}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: arrayValue })
                     
             })
