import React from 'react';


export default function ColdNoodle() {

 	const coldNoodle = [
    { name: 'Cha Soba (green tea noodles)' },
    { name: 'Zaru Sobra or Udon (noodles with leeks, quail egg, wasabe and soba sauce)' },
    { name: 'Ten Zaru Sobra or Udon (noodles with prawn tempura)' },
    { name: 'Hiyashi Soba (brown egg noodles, pork, egg omelette slices, and vegetables' }
    ];
 	const coldNoodleItems = coldNoodle.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {coldNoodleItems}
  	 </ul>

  	);
  }
