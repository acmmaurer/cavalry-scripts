/*
  Creates a Color Array with X amount of indices with Color Arrays connected to each Index.
*/

const arrayId = api.create("colorArray", "ColorArray")

const indexNum = 5;

           Array.from({length: indexNum}).forEach((item, index) => {

                 if (index > 0) {

                   api.addArrayIndex(arrayId, "array")

                 }

                    const colorArrayId = api.create("colorArray", `ColorArray.${index}`)
                    api.connect(colorArrayId, "id",  arrayId, `array.${index}`)
                    api.parent(colorArrayId, arrayId)

            });