import React from 'react';


export default function HotPot() {

 	const hotPot = [
    {name: 'Yasai hotPot (fresh vegetables with Japanese dressing'},
    {name: 'Shake hotPot (salmon and vegetables with wasabe mayo dressing)'},
    {name: 'Tofu hotPot (tofu and vegetables with special Yuujin dressing)'},
    {name: 'Kaisen hotPot (assorted fresh seafood and vegetables with Japanese dressing'},
    {name: 'Kani hotPot (crabstick and fresh vegetables)'}
    ];
 	const hotPotItems = hotPot.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {hotPotItems}
  	 </ul>

  	);
  }
