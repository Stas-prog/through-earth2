"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import * as Cesium from "cesium";

import ThroughEarthSequence
from "./ThroughEarthSequence";

import
"cesium/Build/Cesium/Widgets/widgets.css";


if (
  typeof window !==
  "undefined"
) {

(
window as any
)

.CESIUM_BASE_URL =
"/cesium";

}



type Position = {

lat:number;

lng:number;

};



export default function
CesiumViewer(){


const ref =

useRef<
HTMLDivElement
>(null);



const viewerRef =

useRef<
Cesium.Viewer
|
null
>(
null
);



const [

position,

setPosition

] =

useState<
Position
|
null
>(
null
);




/*
====================
GPS
====================
*/


useEffect(()=>{

navigator
.geolocation

.getCurrentPosition(

(pos)=>{

setPosition({

lat:

pos
.coords
.latitude,

lng:

pos
.coords
.longitude

});

},

(err)=>{

console.error(
err
);

},

{

enableHighAccuracy:
true

}

);

},[]);





/*
====================
CESIUM INIT
====================
*/


useEffect(()=>{


if(
!ref.current
)
return;


if(
viewerRef.current
)
return;



const viewer =

new Cesium.Viewer(

ref.current,

{

animation:true,

timeline:true,

baseLayerPicker:
true,

geocoder:
true,

homeButton:
true,

sceneModePicker:
true,

navigationHelpButton:
true,

fullscreenButton:
true,

infoBox:
false,

selectionIndicator:
false,

shouldAnimate:
true

}

);



viewer.scene.globe
.enableLighting =
true;



viewerRef.current =
viewer;



return()=>{

viewer.destroy();

viewerRef.current =
null;

};


},[]);






/*
====================
START
====================
*/


useEffect(()=>{


if(

!viewerRef.current

||

!position

)

return;



const viewer =

viewerRef.current;



const timer =

setTimeout(()=>{


if(
!viewerRef.current
)
return;



viewer.entities
.removeAll();



viewer.entities
.add({

position:

Cesium
.Cartesian3
.fromDegrees(

position.lng,

position.lat

),

point:{

pixelSize:
12,

color:

Cesium
.Color
.LIME

}

});



viewer.camera.flyTo({

destination:

Cesium
.Cartesian3
.fromDegrees(

position.lng,

position.lat,

18000000

),

duration:5

});


},5000);



return()=>{

clearTimeout(
timer
);

};



},[
position
]);







/*
====================
PHASES
====================
*/


const handlePhase =

async(
phase:string
)=>{


const viewer =

viewerRef.current;



if(

!viewer

||

!position

)

return;



const antipode = {

lat:
-position.lat,

lng:

position.lng>0

?

position.lng-180

:

position.lng+180

};



/*
===========
DIVE
===========
*/


if(
phase==="dive"
){


await new Promise<void>(

resolve=>{


viewer.camera
.flyTo({

destination:

Cesium
.Cartesian3
.fromDegrees(

position.lng,

position.lat,

20

),

orientation:{

heading:
0,

pitch:

Cesium.Math
.toRadians(
-90
),

roll:
0

},

duration:
12,

complete:
()=>resolve()

});


});


return;

}




/*
===========
SPACE
===========
*/


if(
phase==="space"
){


await new Promise<void>(

resolve=>{


viewer.camera
.flyTo({

destination:

Cesium
.Cartesian3
.fromDegrees(

antipode.lng,

antipode.lat,

42000000

),

orientation:{

heading:

Cesium.Math
.toRadians(
180
),

pitch:
0,

roll:
0

},

duration:
10,

complete:
()=>resolve()

});


});


return;

}




/*
===========
REVEAL
===========
*/


if(
phase==="reveal"
){



viewer.entities
.add({

position:

Cesium
.Cartesian3
.fromDegrees(

antipode.lng,

antipode.lat

),

point:{

pixelSize:
10,

color:

Cesium
.Color
.RED

}

});




await new Promise<void>(

resolve=>{


viewer.camera
.flyTo({

destination:

Cesium
.Cartesian3
.fromDegrees(

antipode.lng,

antipode.lat,

18000000

),

orientation:{

heading:
0,

pitch:

Cesium.Math
.toRadians(
-90
),

roll:
0

},

duration:
8,

complete:
()=>resolve()

});


});


return;

}




/*
===========
DESCENT
===========
*/


if(
phase==="descent"
){



await new Promise<void>(

resolve=>{


viewer.camera
.flyTo({

destination:

Cesium
.Cartesian3
.fromDegrees(

antipode.lng,

antipode.lat,

7000000

),

orientation:{

heading:
0,

pitch:

Cesium.Math
.toRadians(
-85
),

roll:
0

},

duration:
10,

complete:
()=>resolve()

});


});


return;

}



};






return(

<>


<div

ref={
ref
}

style={{

position:
"fixed",

inset:
0

}}

/>



<ThroughEarthSequence

onStart={
handlePhase
}

/>


</>

);



}