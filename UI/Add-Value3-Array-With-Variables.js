/*
  Creates a Value3 Array with desired amount of indices and a custom value for each Index.
*/

ui.setTitle("Add Value3 Array with Variables");

const hLayout = new ui.HLayout();
const vLayout = new ui.VLayout();
const valueFieldX = new ui.NumericField(0);
const valueFieldY = new ui.NumericField(0);
const valueFieldZ = new ui.NumericField(0);
const arrayNumField = new ui.NumericField(0);
const valueLabel = new ui.Label("Value");
const numLabel = new ui.Label("#");


goButton = new ui.Button("Go!")

    goButton.setDrawStroke(true);
    goButton.setEnabled(true);
    goButton.setToolTip("XXX");


goButton.onClick = function () {

    
    const arrayValueX = valueFieldX.getValue();
    const arrayValueY = valueFieldY.getValue();
    const arrayValueZ = valueFieldZ.getValue();
    const indexNum = arrayNumField.getValue();
    
   
    const arrayId = api.create("value3Array", "Value3 Array");
      
            Array.from({length: indexNum}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: [arrayValueX,arrayValueY, arrayValueZ] })
                     
             })

            

 }


//UI
    
ui.add(hLayout);

vLayout.add(valueFieldX, valueFieldY, valueFieldZ)


hLayout.add(valueLabel, vLayout, numLabel, arrayNumField, goButton);

ui.show();