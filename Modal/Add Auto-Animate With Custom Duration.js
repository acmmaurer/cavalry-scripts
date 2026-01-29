const modal = new ui.Modal()

const getValue = modal.showStringInput( 'Add Value3 Array with Variables', 'X Value', '0')

const value = parseInt(getValue)

    if (isNaN(value)) {
    
        modal.showMessage("Numbers only plz")
  
    } else {

    const layerIds = api.getSelection();

               layerIds.forEach((layerId) => {

                   const layerType = api.getLayerType(layerId)

                       if (layerType == "textShape")  {
                           
                        const autoAnim = api.create("autoAnimate", "Auto-Animate", allowDefaultPreset=true);

                        api.deleteKeyframe(autoAnim, "progress", 0 )
                        api.deleteKeyframe(autoAnim, "progress", 74 )
                        api.keyframe(autoAnim, 0, {"progress": 0} )
                        api.keyframe(autoAnim, value, {"progress": 100})
                        
                        api.modifyKeyframeTangent(autoAnim, {"progress":{"frame": 0, "weight":0}});
                        api.modifyKeyframeTangent(autoAnim, {"progress":{"frame": value, "weight":100, "angle": 0, "xValue":.5, 
                        "outHandle": true, "weightLocked": false}});
                        
    
                        api.connect(autoAnim, "id", layerId, "deformers")
                        api.parent(autoAnim, layerId)  

                        
                        } else {
                            
                            console.warn("Please select a text layer.")
                            
                        }
                        
                
               })

}

