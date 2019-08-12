import React from 'react';


export default function Yakimono() {

	const yakimono =[
    {name:'Salmon Head Shoiyaki (salmon head salted)'},
    {name:'Salmon Head Teriyaki (salmon head with teriyaki sauce)'},
    {name:'Chicken Teriyaki (chicken with teriyaki sauce)'},
    {name:'Saba Shoiyaki (fresh salted mackerel)'},
    {name:'Beef Teriyaki (beef strips with onion and teriyaki sauce)'},
    {name:'Salmon Teriyaki (salmon with teriyaki sauce)'},
    {name:'Salmon Shoiyaki (salmon salted)'},
    {name:'Unagi Kabayaki (eel with unagi sauce)'},
    {name:'Gindara Teriyaki (silver cod with teriyaki sauce'}
    ];
 	const yakimonoItems = yakimono.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {yakimonoItems}
  	 </ul>

  	);
  }
