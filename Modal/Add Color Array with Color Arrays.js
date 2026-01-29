const modal = new ui.Modal()


const getNum = modal.showStringInput('Add Color Array with Color Arrays', '#', '0')

const num = parseInt(getNum)

    if (isNaN(num)) {
    
        modal.showMessage("Numbers only plz")
  
    } else {

    const arrayId = api.create("colorArray", "ColorArray")

            Array.from({length: num}).forEach((item, index) => {

                    if (index > 0) {

                    api.addArrayIndex(arrayId, "array")

                    }

                        const colorArrayId = api.create("colorArray", `ColorArray.${index}`)
                        api.connect(colorArrayId, "id",  arrayId, `array.${index}`)
                        api.parent(colorArrayId, arrayId)

                });


}

