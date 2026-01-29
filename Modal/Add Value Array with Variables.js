const modal = new ui.Modal()

const getValue = modal.showStringInput( 'Add Value Array with Variables', 'Value', '0')
const getNum = modal.showStringInput('Add Value Array with Variables', '#', '0')

const value = parseInt(getValue)
const num = parseInt(getNum)

    if (isNaN(value) || isNaN(num)) {
    
        modal.showMessage("Numbers only plz")
  
    } else {

        const arrayId = api.create('valueArray', 'Value Array')
        Array.from({ length: num }).forEach((item, index) => {
            
            if (index > 0) {
                
                api.addArrayIndex(arrayId, 'array')
                
            }
            
                const arrayTarget = `array.${index}`
                
                    api.set(arrayId, { [arrayTarget]: value })
        })

}

