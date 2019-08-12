import React from 'react';


export default function Sashimi() {

	const sashimi = [ 
    {name:'Tamago Yaki (egg omelette)'},
    {name:'Kani (crabsticks)'},
    {name: 'Ika (squid)'},
    {name: 'Saba (marinated mackerel)'},
    {name: 'Maguro (tuna)'},
    {name: 'Shake (salmon)'},
    {name: 'Ebiko (fish roe)'},
    {name: 'Uni (sea urchin)'},
    {name: 'Creamy Spicy Tuna (raw tuna with spicy sauce)'},
    {name: 'Creamy Spicy Salmon (raw salmon with spicy sauce)'},
    {name: 'Sashimi Moriawase (5 kinds of sashimi)'}
    ];
 	const sashimiItems = sashimi.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {sashimiItems}
  	 </ul>

  	);
  }
