import React from 'react';


export default function Rice() {

	const rice =[
    {name:'Gohan (white Japanese rice)'},
    {name:'Garlic Rice (fried rice with chopped garlic)'},
    {name:'Oriental Fried Rice (egg, pork and vegetables)'},
    {name:'Chicken Chahan (chicken and vegetable fried rice)'},
    {name:'Ebi Chahan (shrimp and vegetable fried rice)'},
    {name:'Omuraisu (omelette rice)'}
    ];
 	const riceItems = rice.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {riceItems}
  	 </ul>

  	);
  }
