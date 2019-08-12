import React from 'react';


export default function Agemono() {

	const agemono =[
    {name:'Nasu Tempura (egg plant tempura)'},
    {name:'Agedashi Tofu (deep-fried bean curd with tempura sauce)'},
    {name:'Piman Gyoza (stuffed bell peppers, deep-fried)'},
    {name:'Kakiage Tempura (minced seafood and vegetable tempura)'},
    {name:'Kisu Tempura (asohos fish tempura)'},
    {name:'Vegetable Tmpura (vegetables in tempura batter)'},
    {name:'Kani Tempura (crabsticks in tempura batter)'},
    {name:'Ton Katsu (breaded pork fillet)'},
    {name:'Tori Katsu (breaded chicken fillet)'},
    {name:'Ebi Gyoza (stuffed shrimp, deep-fried)'},
    {name:'Pork Katsu Cordon Bleu (breaded pork with ham and cheese)'},
    {name:'Tori Kawayaki (crispy chicken fillets in spicy teriyaki sauce)'},
    {name:'Tori Karaage (crispy chicken fillets)'},
    {name:'Pork Katsu Original Style (breaded pork roll with cabbage)'},
    {name:'Ika Furai (breaded squid)'},
    {name:'Gyu Katsu Curry (beef curry with pork katsu on bed of rice)'},
    {name:'Shake Furai (breaded salmon fillets)'},
    {name:'Ebi Furai (breaded deep-fried prawn)'},
    {name:'Ebi Tempura (prawn in tempura batter)'}
    ];
 	const agemonoItems = agemono.map((d) => <li key={d.name}>{d.name}</li>);
 
  return ( 
  	 <ul>
  	 {agemonoItems}
  	 </ul>

  	);
  }
