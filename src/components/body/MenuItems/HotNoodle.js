import React from 'react';


export default function HotNoodle() {

 	const hotNoodle = [
    { name: 'Kitzumi Sobra ur Udon (noodles and fried bean curd, in hot broth)' },
    { name: 'Tempura Sobra or Udon (noodles and prawn tempura in hot broth)' },
    { name: 'Niku Soba ur Udon (noodles and beef strips, in hot broth)' },
    { name: 'Yaki Soba (stir-fried egg noodles with pork and vegetables)' },
    { name: 'Yaki Udon (stir-fried thick wheat noodles with pork and vegetables)' },
   
    ];
 	const hotNoodleItems = hotNoodle.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {hotNoodleItems}
  	 </ul>

  	);
  }
