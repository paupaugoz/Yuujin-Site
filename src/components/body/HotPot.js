import React from 'react';


export default function HotPot() {

 	const hotPot = [
    {name: 'Sukiyaki - Pork'},
    {name: 'Sukiyaki - Chicken'},
    {name: 'Sukiyaki - Beef'}
    ];
 	const hotPotItems = hotPot.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {hotPotItems}
  	 </ul>

  	);
  }
