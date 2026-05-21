"use client";

import {
useEffect,
useState
}
from "react";

import ThroughEarthButton
from "./ThroughEarthButton";

type Phase =
| "idle"
| "dive"
| "space"
| "reveal"
| "descent";


export default function
ThroughEarthSequence({

onStart

}:{

onStart:
(
phase:string
)=>
Promise<void>

}){

const[
phase,
setPhase
]=
useState<Phase>(
"idle"
);


const[
isPortrait,
setPortrait
]=
useState(
false
);


useEffect(()=>{

const update=
()=>{

setPortrait(

window.innerHeight>
window.innerWidth

);

};

update();

window.addEventListener(
"resize",
update
);

return()=>{

window.removeEventListener(
"resize",
update
);

};

},[]);


const videoSrc=

isPortrait

?

"/videos/travel.mp4"

:

"/videos/travel2.mp4";

console.log("VIDEO:", videoSrc)

const start=

async()=>{

setPhase(
"dive"
);

await onStart(
"dive"
);


setPhase(
"space"
);

await onStart(
"space"
);


setPhase(
"reveal"
);

await onStart(
"reveal"
);


setPhase(
"descent"
);

await onStart(
"descent"
);


setPhase(
"idle"
);

};



return(

<>

<ThroughEarthButton

onClick={
start
}

disabled={
phase!=="idle"
}

/>


<div

className="

fixed
top-4
left-4

z-50

text-white

"

>

{phase}

</div>



{
phase==="space" && (

<video
src={videoSrc}
autoPlay
muted
playsInline
preload="metadata"

onEnded={()=>{
setPhase("reveal")
}}

className="
fixed
top-0
left-0
w-screen
h-screen
object-contain
z-[999999999]
pointer-events-none
"
style={{
position:"fixed",
top:0,
left:0,
width:"100vw",
height:"100vh",
zIndex:999999999,
background:"black"
}}
>

</video>

)
}


</>

);

}