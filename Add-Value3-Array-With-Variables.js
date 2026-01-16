/*
  Creates a Value3 Array with desired amount of indices and a custom value for each Index.
*/
    const arrayXValue = 100;
    const arrayYValue = 50;
    const arrayZValue = 25;
    const indexNum = 30;
    
   
    const arrayId = api.create("value3Array", "Value3 Array");
      
            Array.from({length: indexNum}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: [arrayXValue,arrayYValue,arrayZValue] })
                     
             })
