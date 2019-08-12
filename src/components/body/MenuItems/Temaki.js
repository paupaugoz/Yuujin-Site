import React from 'react';


export default function Temaki() {

	const temaki = [ 
    {name:'Tempura Temaki'},
    {name:'Chicken Temaki'},
    {name: 'Tuna Temaki'},
    {name: 'California Temaki (mango, lettuce, kani, shrimp roe and mayo)'},
    {name: 'Salmon Temaki'},
    {name: 'Unagi Temaki'}
    ];
 	const temakiItems = temaki.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {temakiItems}
  	 </ul>

  	);
  }
