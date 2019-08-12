import React from 'react';


export default function RiceTopping() {

	const riceTopping =[
    {name:'Oyako Don (sliced chicken in light soy sauce on rice)'},
    {name:'Chicken Teriyaki Don (grilled chicken with teriyaki sauce)'},
    {name:'Katsu Don (pork cutlet with special Yuujin sauce on rice)'},
    {name:'Butakatsu-Jyu (breaded deep-fried pork with vegetable)'},
    {name:'Kakiage-Jyu (seafood and vegetable tempura, on rice)'},
    {name:'Tekka-Jyu (raw tuna with dried seaweed on vinegared rice)'},
    {name:'Ten-Don (shrimp tempura with vegetable)'},
    {name:'Buta Teppan Don (pork teppanyaki on rice)'},
    {name:'Gyu Don (soy sauce-flavored beef with fresh egg on rice)'},
    {name:'Shake Teppan Don (sauteed salmon and vegetable on rice)'},
    {name:'Shake Jyu (raw salmon on bed of rice)'},
    {name:'Beef Teriyaki-Jyu (beef with teriyaki sauce on rice)'},
    {name:'Maguro Teriyaki Don (pan-grilled tuna with teriyaki sauce on rice'},
    {name:'Maguro Teppanyaki Don (sauteed tuna with bean sprouts on rice)'},
    {name:'Uni Don (sea urchin roe on bed of rice)'},
    {name:'Una-Jyu (eel with teriyaki sauce on rice)'},
    {name:'Namachirashi-Jyu (assorted raw fish on rice)'}
    ];
 	const riceToppingItems = riceTopping.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {riceToppingItems}
  	 </ul>

  	);
  }
