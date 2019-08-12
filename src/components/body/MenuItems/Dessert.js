import React from 'react';


export default function Dessert() {

 	const dessert = [
    {name: 'Ice Cream'},
    {name: 'Banana Tempura (deep-fried banana in tempura batter a la mode)'},
    {name: 'Tempura Ice Cream (deep-fried ice cream in tempura batter)'}
    ];
 	const dessertItems = dessert.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {dessertItems}
  	 </ul>

  	);
  }
