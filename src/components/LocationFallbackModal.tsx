import { useState } from "react";

type Props = {
onClose:()=>void;

onManualLocation:(
lat:number,
lon:number
)=>void;

};

export default function
LocationFallbackModal({

onClose,
onManualLocation

}:Props){

const[
lat,
setLat
]=useState("");

const[
lon,
setLon
]=useState("");



const start=()=>{

const latitude=
parseFloat(lat);

const longitude=
parseFloat(lon);


if(

isNaN(latitude)

||

isNaN(longitude)

){

alert(

"Enter valid coordinates 🌍"

);

return;

}


onManualLocation(

latitude,
longitude

);

};



const presets=[

{

name:"Kyiv 🇺🇦",

lat:"50.4501",

lon:"30.5234"

},

{

name:"Tokyo 🇯🇵",

lat:"35.6764",

lon:"139.6500"

},

{

name:"Sydney 🇦🇺",

lat:"-33.8688",

lon:"151.2093"

},

{

name:"New York 🇺🇸",

lat:"40.7128",

lon:"-74.0060"

}

];



return(

<div style={{

position:"fixed",

inset:0,

background:
"rgba(0,0,0,.75)",


display:"flex",

justifyContent:"center",

alignItems:
"flex-start",


overflowY:
"auto",


padding:
"30px 0",


zIndex:
999999999

}}>



<div style={{

width:"90%",

maxWidth:
420,


maxHeight:
"90vh",


overflowY:
"auto",


background:

"linear-gradient(180deg,#050816,#02030a)",


borderRadius:
32,


padding:
28,


color:
"white",


boxShadow:

"0 0 50px rgba(0,180,255,.15)",


border:

"1px solid rgba(255,255,255,.06)"

}}>



<h2 style={{

marginTop:0,

fontSize:30

}}>

🌍 Location unavailable

</h2>



<p style={{

opacity:.9,

lineHeight:1.7

}}>

Your device could not
provide coordinates.

<br/><br/>

You can still explore
Earth manually ✨

</p>





<div style={{

marginTop:20,

lineHeight:2

}}>

✓ Enable GPS

<br/>

✓ Refresh page

<br/>

✓ Allow location permissions

<br/>

✓ Or enter coordinates manually


</div>





<div style={{

marginTop:24,

padding:20,

borderRadius:20,

background:

"rgba(255,255,255,.03)"

}}>


<b>

Example:

</b>


<br/><br/>

Kyiv 🇺🇦


<br/><br/>

Latitude:

<br/>

50.4501


<br/><br/>

Longitude:

<br/>

30.5234


<br/><br/>

Search Google:

<br/>


<i>

"city latitude longitude"

</i>


</div>





<input

placeholder=
"Latitude"

value={
lat
}

onChange={(e)=>

setLat(

e.target.value

)

}

style={{

width:"100%",

padding:18,

marginTop:22,

borderRadius:18,

border:"none",

fontSize:18,

boxSizing:
"border-box"

}}

/>




<input

placeholder=
"Longitude"

value={
lon
}

onChange={(e)=>

setLon(

e.target.value

)

}

style={{

width:"100%",

padding:18,

marginTop:16,

borderRadius:18,

border:"none",

fontSize:18,

boxSizing:
"border-box"

}}

/>





<div style={{

display:"flex",

gap:10,

flexWrap:
"wrap",


marginTop:18

}}>

{

presets.map(

city=>(

<button

key={
city.name
}

onClick={()=>{

setLat(
city.lat
);

setLon(
city.lon
);

}}

style={{

padding:
"10px 14px",

borderRadius:
14,

border:
"none",

background:
"rgba(255,255,255,.12)",

color:
"white",

cursor:
"pointer",


fontSize:
14

}}

>

{

city.name

}

</button>

)

)

}


</div>






<div style={{

marginTop:24,

opacity:.7,

fontSize:14,

lineHeight:1.6

}}>

After travelling,

you can return and explore

another point on Earth

🌍✨🚀


</div>






<div style={{

display:"flex",

gap:12,

marginTop:28

}}>



<button

onClick={
start
}

style={{

flex:1,

padding:18,

border:
"none",

borderRadius:
18,


background:
"#0090ff",


color:
"white",


fontWeight:
700,


fontSize:
18,


cursor:
"pointer"

}}

>

🚀 Start journey


</button>




<button

onClick={
onClose
}

style={{

padding:
"18px 20px",

border:
"none",

borderRadius:
18,


cursor:
"pointer"

}}

>

Close


</button>



</div>



</div>


</div>

);

}