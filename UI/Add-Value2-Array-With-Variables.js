/*
  Creates a Value2 Array with desired amount of indices and a custom value for each Index.
*/

ui.setTitle("Add Value2 Array with Variables");

const hLayout = new ui.HLayout();
const vLayout = new ui.VLayout();
const valueFieldX = new ui.NumericField(0);
const valueFieldY = new ui.NumericField(0);
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
    const indexNum = arrayNumField.getValue();
    
   
    const arrayId = api.create("value2Array", "Value2 Array");
      
            Array.from({length: indexNum}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: [arrayValueX,arrayValueY] })
                     
             })

            

 }


//UI
    
ui.add(hLayout);

vLayout.add(valueFieldX, valueFieldY)


hLayout.add(valueLabel, vLayout, numLabel, arrayNumField, goButton);

ui.show();