import React from 'react';


export default function Teppanyaki() {

 	const teppanyaki = [
    { name: 'Moyashi Teppan (beans sprouts with price)' },
    { name: 'Nira Teppan (kutchay with chicken)' },
    { name: 'Tofu Steak (bean curd with pork and vegetables)' },
    { name: 'Yasai Itame (sauteed mixed vegetables and pork)' },
    { name: 'Buta Shoga Yaki (pork slices sauteed in soy sauce and ginger)' },
    { name: 'Subuta (sweet and sour pork, japanese style)' },
    { name: 'Wakadori Teppan (chicken with steak sauce)' },
    { name: 'Shiitake Teppan (sauteed Japanese mushrooms with bits of chicken)' },
    { name: 'Buta Teppan (sauteed pork cubes with steak sauce)' },
    { name: 'Ika Teppan (sauteed squid and vegetables)' },
    { name: 'Shake Teppan (sauteed salmon cubes)' },
    { name: 'Salmon Steak (salmon with butter and lemon)' },
    { name: 'Yakiniku Teppan (sauteed sliced beef, in garlic-flavored sauce)' },
    { name: 'Maguro Teppan (sauteed tuna cubes with steak sauce)' },
    { name: 'Tenderloin Steak Yuujin Style (sliced beef cubes with Yuujin steak sauce)' },
    { name: 'Prawn Steak Yuujin Style (sauteed prawn with steak sauce)' }
    ];
 	const teppanyakiItems = teppanyaki.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {teppanyakiItems}
  	 </ul>

  	);
  }
