import React from 'react';


export default function Beverages() {

 	const beverages = [
    { name: 'Regular Iced Tea',
      price: 12 },
    { },
    { name: 'Agedashi Tofu (deep-fried bean curd with tempura sauce)',
      price: 12 },
    { name: 'Soda' },
    { price: 14},
    { name: 'C2 Bottled Tea' },
    { price: 14},
    { name: 'Fit N Right' },
    { price: 14},
    { name: 'Minute Maid' },
    { price: 14},
    { name: 'Calamansi Juice' },
    { name: 'Mango Shake' },
    { name: 'Banana Shake' },
    { name: 'Pineapple Shake' },
    { name: 'Papaya Shake' },
    { name: 'Pale Pilsen' },
    { name: 'San Mig Lite' },
    { name: 'Japanese Sake' },
    { name: 'Japanese Tea' },
    { name: 'Brewed Coffee' },
    { name: 'Bottled Water' },
    ];
  const beverage = [
    { price: 12 },
    { price: 'Homemade Brewed Iced Tea' },
    { price: 'Soda' },
    { price: 'C2 Bottled Tea' },
    { price: 'Fit N Right' },
    { price: 'Minute Maid' },
    { price: 'Calamansi Juice' },
    { price: 'Mango Shake' },
    { price: 'Banana Shake' },
    { price: 'Pineapple Shake' },
    { price: 'Papaya Shake' },
    { price: 'Pale Pilsen' },
    { price: 'San Mig Lite' },
    { price: 'Japanese Sake' },
    { price: 'Japanese Tea' },
    { price: 'Brewed Coffee' },
    { price: 'Bottled Water' },
  ];
 	const beveragesItems = beverages.map((d) => <li className="text-justify" key={d.name}><span className="w-300">{d.name}</span>
                                                <span className="float-right">{d.price}</span></li>);
  const beveragePrice = beverage.map((d) => <li key={d.price}>{d.price}</li>);
  return ( 
    
  	   <ul>
  	     {beveragesItems}
  	   </ul>
      
    
   



  	);
  }
