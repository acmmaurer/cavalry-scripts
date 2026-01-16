/*
  Creates a Value2 Array with desired amount of indices and a custom value for each Index.
*/
    const arrayXValue = 100;
    const arrayYValue = 50;
    const indexNum = 30;
    
   
    const arrayId = api.create("value2Array", "Value2 Array");
      
            Array.from({length: indexNum}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: [arrayXValue,arrayYValue] })
                     
             })
