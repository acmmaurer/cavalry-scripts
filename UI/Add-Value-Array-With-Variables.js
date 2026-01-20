ui.setTitle("Add Value Array with Variables");

const hLayout = new ui.HLayout();
const valueField = new ui.NumericField(0);
const arrayNumField = new ui.NumericField(0);
const valueLabel = new ui.Label("Value");
const numLabel = new ui.Label("#");


goButton = new ui.Button("Go!")

    goButton.setDrawStroke(true);
    goButton.setEnabled(true);
    goButton.setToolTip("XXX");


goButton.onClick = function () {

    
    const getValue = valueField.getValue();
    const getNum = arrayNumField.getValue();
    
   
      const arrayId = api.create("valueArray", "Value Array");
      
            Array.from({length: getNum}).forEach((item, index) => {
                
                  if (index > 0) {
                      
                    api.addArrayIndex(arrayId, "array")
                    
                  }
                  
                     const arrayTarget = `array.${index}`
                     api.set(arrayId, { [arrayTarget]: getValue })
                     
             })
            

 }


//UI
    
ui.add(hLayout);

hLayout.add(valueLabel, valueField, numLabel, arrayNumField, goButton);

ui.show();