import { useState } from "react";

type Props = {
  onClose:()=>void;

  onSubmit:(

    lat:number,
    lng:number

  )=>void;
};


export default function ExploreEarthModal({

onClose,
onSubmit

}:Props){

const [

lat,
setLat

] = useState("");

const [

lng,
setLng

] = useState("");



const presets=[

{

name:"Kyiv 🇺🇦",

lat:"50.4501",
lng:"30.5234"

},

{

name:"Tokyo 🇯🇵",

lat:"35.6764",
lng:"139.6500"

},

{

name:"Sydney 🇦🇺",

lat:"-33.8688",
lng:"151.2093"

},

{

name:"New York 🇺🇸",

lat:"40.7128",
lng:"-74.0060"

},

{

name:"Rio 🇧🇷",

lat:"-22.9068",
lng:"-43.1729"

},

{

name:"Cairo 🇪🇬",

lat:"30.0444",
lng:"31.2357"

},

{

name:"Antarctica 🧊",

lat:"-82",
lng:"0"

}

];



const start=()=>{

const latitude=

parseFloat(lat);

const longitude=

parseFloat(lng);



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



onSubmit(

latitude,
longitude

);

};



return(

<div style={{

position:"fixed",

inset:0,

background:

"rgba(0,0,0,.78)",

display:"flex",

justifyContent:"center",

alignItems:

window.innerWidth>768

?

"center"

:

"flex-start",


overflowY:"auto",


padding:

window.innerWidth>768

?

"40px"

:

"30px 0",


zIndex:999999999

}}>



<div style={{

width:"90%",

maxWidth:420,

background:

"linear-gradient(180deg,#050816,#02030a)",

padding:28,

borderRadius:32,

color:"white",

boxShadow:

"0 0 50px rgba(0,180,255,.18)",

border:

"1px solid rgba(255,255,255,.06)"

}}>



<h2 style={{

marginTop:0,

fontSize:32

}}>

🌍 Continue exploring

</h2>



<p style={{

opacity:.85,

lineHeight:1.7

}}>

Travel from another place

on Earth ✨🚀


<br/><br/>

Choose a city

or enter coordinates

manually.

</p>





<input

placeholder="Latitude"

value={lat}

onChange={(e)=>

setLat(

e.target.value

)

}

style={{

width:"100%",

padding:18,

marginTop:20,

borderRadius:18,

border:"none",

fontSize:18,

boxSizing:"border-box"

}}

/>



<input

placeholder="Longitude"

value={lng}

onChange={(e)=>

setLng(

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

boxSizing:"border-box"

}}

/>





<div style={{

display:"flex",

gap:10,

flexWrap:"wrap",

marginTop:20

}}>

{

presets.map(

city=>(

<button

key={city.name}

onClick={()=>{

setLat(

city.lat

);

setLng(

city.lng

);

}}

style={{

padding:

"10px 14px",

borderRadius:

14,

background:

"rgba(255,255,255,.12)",

border:"none",

color:"white",

cursor:"pointer",

fontSize:14

}}

>

{city.name}

</button>

)

)

}

</div>





<div style={{

marginTop:26,

padding:18,

borderRadius:20,

background:

"rgba(255,255,255,.03)",

opacity:.8,

lineHeight:1.7

}}>

✨ Every point

on Earth reveals

another side of

our planet.


<br/><br/>

Try cities,

oceans,

deserts,

or Antarctica 🧊

</div>






<div style={{

display:"flex",

gap:12,

marginTop:28

}}>



<button

onClick={start}

style={{

flex:1,

padding:18,

borderRadius:18,

border:"none",

background:"#0090ff",

fontSize:18,

fontWeight:700,

color:"white",

cursor:"pointer"

}}

>

🚀 Travel


</button>





<button

onClick={onClose}

style={{

padding:

"18px 20px",

borderRadius:

18,

border:"none",

cursor:"pointer"

}}

>

Close

</button>



</div>



</div>

</div>

);

}