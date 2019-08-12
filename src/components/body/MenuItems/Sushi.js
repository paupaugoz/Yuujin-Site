import React from 'react';


export default function Sushi() {

	const sushi = [ 
    {name:'Tamago Sushi (egg omelette)'},
    {name:'Ika Sushi (squid)'},
    {name: 'Saba Sushi (mackerel)'},
    {name: 'Inari Sushi (tofu)'},
    {name: 'Kani Sushi (crabsticks)'},
    {name: 'Maguro Sushi (tuna)'},
    {name: 'Ebiko Sushi (fish roe)'},
    {name: 'Ebi Sushi (shrimp)'},
    {name: 'Shake Sushi (salmon)'},
    {name: 'Uni Sushi (sea urchin)'},
    {name: 'Unagi Sushi (eel)'},
    {name: 'Sushi Moriawase (7 kinds of assorted sushi)'}
    ];
 	const sushiItems = sushi.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {sushiItems}
  	 </ul>

  	);
  }
