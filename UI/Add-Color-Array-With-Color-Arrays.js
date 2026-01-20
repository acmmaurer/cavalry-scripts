/*
  Creates a Color Array with X amount of indices with Color Arrays connected to each Index.
*/

ui.setTitle("Add Color Array with Color Arrays");

const hLayout = new ui.HLayout();
const arrayNumField = new ui.NumericField(0);
const numLabel = new ui.Label("#");


goButton = new ui.Button("Go!")

    goButton.setDrawStroke(true);
    goButton.setEnabled(true);
    goButton.setToolTip("XXX");


goButton.onClick = function () {

const indexNum = arrayNumField.getValue();

const arrayId = api.create("colorArray", "ColorArray")

           Array.from({length: indexNum}).forEach((item, index) => {

                 if (index > 0) {

                   api.addArrayIndex(arrayId, "array")

                 }

                    const colorArrayId = api.create("colorArray", `ColorArray.${index}`)
                    api.connect(colorArrayId, "id",  arrayId, `array.${index}`)
                    api.parent(colorArrayId, arrayId)

            });

            

 }


//UI
    
ui.add(hLayout);

hLayout.add(numLabel, arrayNumField, goButton);

ui.show();