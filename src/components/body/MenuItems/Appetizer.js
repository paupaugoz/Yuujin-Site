import React from 'react';


export default function Appetizer() {

	const appetizer =[
      {name:'Oshienko (picked yellow radish)'},
      {name:'Edamame (boiled Japanese beans)'},
      {name:'Hiyayako (beancurd with ginger sauce)'},
      {name:'Nasu Abura (sweetened eggplant with sesame seed)'},
      {name:'Gyoza (pork and vegetable dumpling)'},
      {name:'Salmon Skin Karaage (crispy fried, salmon skins)'},
      {name:'Grilled Salmon Skins (with onions, leaks, sanbaizu sauce'},
      {name:'Ika Uni (thinly sliced squid w/ fresh sea urchin'},
      {name:'Maguro Tatake (medium-rare tuna slices with special sauce'},
      {name:'Salmon Tatake (medium-rare salmon slices w/ special sauce)'},
      {name:'Salmon Yuki (salted raw salmon in sesame oil'},
      {name:'Salmon Yuki (salted raw tuna in sesame oil)'},
      {name:'Miso Shiru (soy bean paste soup)'}
    ];
 	const appetizerItems = appetizer.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {appetizerItems}
  	 </ul>

  	);
  }
