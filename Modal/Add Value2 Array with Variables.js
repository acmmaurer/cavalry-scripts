const modal = new ui.Modal()

const getValueX = modal.showStringInput( 'Add Value2 Array with Variables', 'X Value', '0')
const getValueY = modal.showStringInput( 'Add Value2 Array with Variables', 'Y Value', '0')
const getNum = modal.showStringInput('Add Value Array with Variables', '#', '0')

const valueX = parseInt(getValueX)
const valueY = parseInt(getValueY)
const num = parseInt(getNum)

    if (isNaN(valueX) || isNaN(valueY) || isNaN(num)) {
    
        modal.showMessage("Numbers only plz")
  
    } else {

    const arrayId = api.create("value2Array", "Value2 Array");
      
            Array.from({length: num}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: [valueX,valueY] })
                     
             })

}

