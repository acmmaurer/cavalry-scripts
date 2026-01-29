const modal = new ui.Modal()


const getNum = modal.showStringInput('Add Color Array with Color Arrays', '#', '0')

const num = parseInt(getNum)

    if (isNaN(num)) {
    
        modal.showMessage("Numbers only plz")
  
    } else {

    const arrayId = api.create("colorArray", "ColorArray");

           Array.from({length: num}).forEach((item, index) => {

                 if (index > 0) {

                   api.addArrayIndex(arrayId, "array")

                 }

                    const colorBlendId = api.create("colorBlend", `ColorBlend.${index}`)
                    api.connect(colorBlendId, "id",  arrayId, `array.${index}`)
                    api.parent(colorBlendId, arrayId)

            })


}

