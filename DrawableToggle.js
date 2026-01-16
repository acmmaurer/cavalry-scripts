/*

  Drawable Toggle
  Version 1.0
  Author: Adam Maurer 

  Description: Toggles on & off all drawables (Nulls, Falloffs, Modifiers) by changing alpha value
  
  Usage: This is a possibly temporary solution to not having a keyboard shortcut for toggling drawables off and on. 
  Presently, the only way to turn them off is to go into the viewport settings and change the Drawable Visibility 
  in a dropdown menu. That takes too much time! This script can be assigned to a shortcut key.

*/


const startSelection = api.getSelection(); 

function drawableToggle () {

        //All Drawables to be defined 
    
        const nullIds = api.getCompLayersOfType(false, "null")
        const falloffIds = api.getCompLayersOfType(false, "falloff")
        const particleIds = api.getCompLayersOfType(false, "particleEmitter")
        const cameraIds = api.getCompLayersOfType(false, "cameraGuide")
        const goalModifierIds = api.getCompLayersOfType(false, "goalModifier")
        const directionFieldIds = api.getCompLayersOfType(false, "directionField")
        const attractorFieldIds = api.getCompLayersOfType(false, "attractorField")
        const magneticModiferIds = api.getCompLayersOfType(false, "magneticModifier")
        const vortexModifierIds = api.getCompLayersOfType(false, "vortexModifier")
        const turbulenceModifierIds = api.getCompLayersOfType(false, "turbulenceModifier")
        const speedModifierIds = api.getCompLayersOfType(false, "speedModifier")
        const dataModifierIds = api.getCompLayersOfType(false, "dataModifier")
        const flowFieldModifierIds = api.getCompLayersOfType(false, "flowFieldModifier")
        const forceModifierIds = api.getCompLayersOfType(false, "forceModifier")
        const pathModifierIds = api.getCompLayersOfType(false, "pathModifier")
        
        
        //Merge Arrays

        const drawables = [...nullIds, ...falloffIds, ...particleIds, ...cameraIds, ...goalModifierIds, ...directionFieldIds, 
        ...attractorFieldIds, ...magneticModiferIds, ...vortexModifierIds, ...turbulenceModifierIds, ...speedModifierIds, ...dataModifierIds,
        ...flowFieldModifierIds, ...forceModifierIds, ...pathModifierIds]
       
        api.select(drawables)
        

        const layerIds = api.getSelection();

            layerIds.forEach((layerId) => {

                const layerType = api.getLayerType(layerId)

                    if ((layerType == "null") || (layerType == "cameraGuide"))  {

                        const customColorChecked = api.set(layerId, {'customColor': true});
                        const nullAlpha = api.get(layerId, 'nullColor.a');

                            if (nullAlpha > 0) {

                                api.set(layerId, {'nullColor.a': 0})

                            } else {

                                api.set(layerId, {'nullColor.a': 255})
                                

                            }

                    } else if ((layerType == "falloff") || (layerType == "particleEmitter") || (layerType == "goalModifier") || 
                    (layerType == "directionField") || (layerType == "attractorField") || (layerType == "magneticModifier") || (layerType == "vortexModifier") ||
                    (layerType == "turbulenceModifier") || (layerType == "speedModifier") || (layerType == "dataModifier") || (layerType == "flowFieldModifier") ||
                    (layerType == "forceModifier"))  {

                        const customColorChecked = api.set(layerId, {'customColor': true});
                        const falloffAlpha = api.get(layerId, 'drawColor.a');

                            if (falloffAlpha > 0) {

                                api.set(layerId, {'drawColor.a': 0})

                            } else {

                                api.set(layerId, {'drawColor.a': 255})
                                

                            }
                            
                            
                     } else if (layerType == "pathModifier") {
                         
                         const customColorChecked = api.set(layerId, {'customColor': true});
                         const falloffAlpha = api.get(layerId, 'drawColor.a');
                         
                         if (falloffAlpha > 0) {
                             
                             api.set(layerId, {'drawColor.a': 0})
                             api.set(layerId, {'drawFlowMarginIndicator': false}) 
                             
                         } else {
                             
                             api.set(layerId, {'drawColor.a': 255})
                             api.set(layerId, {'drawFlowMarginIndicator': true})
                             
                         }
                         
                         
                     }
                            

            });
            
            
        api.select([]);

    
}

drawableToggle();

api.select(startSelection)

