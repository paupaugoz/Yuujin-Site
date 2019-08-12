import React from 'react';


export default function Salad() {

 	const salad = [
    {name: 'Yasai Salad (fresh vegetables with Japanese dressing'},
    {name: 'Shake Salad (salmon and vegetables with wasabe mayo dressing)'},
    {name: 'Tofu Salad (tofu and vegetables with special Yuujin dressing)'},
    {name: 'Kaisen Salad (assorted fresh seafood and vegetables with Japanese dressing'},
    {name: 'Kani Salad (crabstick and fresh vegetables)'}
    ];
 	const saladItems = salad.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {saladItems}
  	 </ul>

  	);
  }
