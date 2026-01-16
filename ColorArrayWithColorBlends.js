/*
  Creates a Color Array with X amount of indices with Color Blends connected to each Index.
*/



const arrayId = api.create("colorArray", "ColorArray")

const indexNum = 5;

           Array.from({length: indexNum}).forEach((item, index) => {

                 if (index > 0) {

                   api.addArrayIndex(arrayId, "array")

                 }

                    const colorBlendId = api.create("colorBlend", `ColorBlend.${index}`)
                    api.connect(colorBlendId, "id",  arrayId, `array.${index}`)
                    api.parent(colorBlendId, arrayId)

            })