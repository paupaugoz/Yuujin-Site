import React from 'react';


export default function Makimono() {

	const makimono = [ 
    {name:'Oshienko Maki (picked raddish roll)'},
    {name:'Kappa Maki (cucumber roll)'},
    {name: 'Tamago Maki (egg omelette roll)'},
    {name: 'Vegetarian Roll (lettuce, mango, cucumber, carrots w/ wasabi)'},
    {name: 'Kani Maki (kani and vegetables, rice, rolled in nori)'},
    {name: 'Tekka Maki (tuna roll)'},
    {name: 'Tempura Maki (shrimp tempura roll)'},
    {name: 'Salmon Skin Maki'},
    {name: 'Kani Salad Maki (kani and vegetables, rice, rolled in nori)'},
    {name: 'Ebi Salad Maki (prawn and vegetables, rice, rolled in nori)'},
    {name: 'Spicy Tuna Maki (spicy raw salmon, vinegared rice, rolled in nori)'},
    {name: 'Fried Cheezy Salmon Maki (salmon and cheese, deep-fried'},
    {name: 'Green Roll (fried spicy salmon, vinegared rice, nori bits)'},
    {name: 'Tuna Salmon and Cheezu Roll (tuna, salmon and cheddar cheese)'},
    {name: 'Sunflower Maki (kani, mango and cucumber, wrapped with salmon, topped with ebiko)'},
    {name: 'Rainbow Maki (tuna, salmon, shrimp)'},
    {name: 'Unagi Maki (cooked eel roll)'},
    {name: 'Yuujin Yummy Roll (ebi, kani, cucumber)'},
    {name: 'Crazy Maki (crabstick on top, rolled in tempura flakes)'},
    {name: 'Tuna Lovers Roll (tuna, ebiko, sesame seeds)'},
    {name: 'Salmon Lovers Roll (salmon, ebiko, sesame seeds)'},
    {name: 'Hot Bahamas Roll (tuna, salmon, chili sauce)'},
    {name: 'Futo Maki (large roll)'},
    {name: 'Rock & Roll (tuna, salmon and ebiko)'},
    {name: 'Bamboo Roll (kani, unagi, and avocado)'},
    {name: 'Ebi Unagi Roll (ee, shrimp tempura)'},
    {name: 'Dragon Roll (tuna, mango, unagi)'},
    {name: 'Pink Roll (tuna, salmon, and unagi)'}
    ];
 	const makimonoItems = makimono.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	   {makimonoItems}
  	 </ul>

  	);
  }
