/*

  Freeze Calculations In & Out
  Version 1.0
  Author: Adam Maurer 

  Description: Adds Freeze Calculations keys (On/Off-In, Off/On-Out) to In & Out of layer(s) selected. 
  
  Usage: Heavy geometry duplicators, pre-compositions, and intensive filter use can drag performance 
  on the rest of the active composition even when turned off or at a different point in time. By Freezing the layer
  in question, the rest of the active composition speeds up. 

*/


const layerIds = api.getSelection();

    layerIds.forEach((layerId) => {
        
        const inPoint = api.getInFrame(layerId);
        const outPoint = api.getOutFrame(layerId);
    
        const kfId0 = api.keyframe(layerId, inPoint-1, {"frozen": true});
        const kfId1 = api.keyframe(layerId, inPoint, {"frozen": false});
        const kfId2 = api.keyframe(layerId, outPoint, {"frozen": false});
        const kfId3 = api.keyframe(layerId, outPoint+1, {"frozen": true});

});

