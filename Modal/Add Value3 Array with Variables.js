const modal = new ui.Modal()

const getValueX = modal.showStringInput( 'Add Value3 Array with Variables', 'X Value', '0')
const getValueY = modal.showStringInput( 'Add Value3 Array with Variables', 'Y Value', '0')
const getValueZ = modal.showStringInput( 'Add Value3 Array with Variables', 'Z Value', '0')
const getNum = modal.showStringInput('Add Value Array with Variables', '#', '0')

const valueX = parseInt(getValueX)
const valueY = parseInt(getValueY)
const valueZ = parseInt(getValueZ)
const num = parseInt(getNum)

    if (isNaN(valueX) || isNaN(valueY) || isNaN(valueZ)|| isNaN(num)) {
    
        modal.showMessage("Numbers only plz")
  
    } else {

    const arrayId = api.create("value3Array", "Value3 Array");
      
            Array.from({length: num}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: [valueX,valueY,valueZ] })
                     
             })

}

