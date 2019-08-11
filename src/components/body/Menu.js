import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Container} from 'react-bootstrap';
import NavBody from './NavBody';


export default class Menu extends Component {
   render() {
    const appetizer =[
      {name:'Oshienko (picked yellow radish)'},
      {name:'Edamame (boiled Japanese beans)'},
      {name:'Hiyayako (beancurd with ginger sauce)'},
      {name:'Nasu Abura (sweetened eggplant with sesame seed)'},
      {name:'Gyoza (pork and vegetable dumpling)'},
      {name:'Salmon Skin Karaage (crispy fried, salmon skins)'},
      {name:'Grilled Salmon Skins (with onions, leaks, sanbaizu sauce'},
      {name:'Ika Uni (thinly sliced squid w/ fresh sea urchin'},
      {name:'Maguro Tatake (medium-rare tuna slices with special sauce'},
      {name:'Salmon Tatake (medium-rare salmon slices w/ special sauce)'},
      {name:'Salmon Yuki (salted raw salmon in sesame oil'},
      {name:'Salmon Yuki (salted raw tuna in sesame oil)'}
    ];
    const temaki = [ 
    {name:'Tempura Temaki'},
    {name:'Chicken Temaki'},
    {name: 'Tuna Temaki'},
    {name: 'California Temaki (mango, lettuce, kani, shrimp roe and mayo)'},
    {name: 'Salmon Temaki'},
    {name: 'Unagi Temaki'}
    ];
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
    const sushi = [ 
    {name:'Tamago Sushi (egg omelette)'},
    {name:'Ika Sushi (squid)'},
    {name: 'Saba Sushi (mackerel)'},
    {name: 'Inari Sushi (tofu)'},
    {name: 'Kani Sushi (crabsticks)'},
    {name: 'Maguro Sushi (tuna)'},
    {name: 'Ebiko Sushi (fish roe)'},
    {name: 'Ebi Sushi (shrimp)'},
    {name: 'Shake Sushi (salmon)'},
    {name: 'Uni Sushi (sea urchin)'},
    {name: 'Unagi Sushi (eel)'},
    {name: 'Sushi Moriawase (7 kinds of assorted sushi)'}
    ];
    const sashimi = [ 
    {name:'Tamago Yaki (egg omelette)'},
    {name:'Kani (crabsticks)'},
    {name: 'Ika (squid)'},
    {name: 'Saba (marinated mackerel)'},
    {name: 'Maguro (tuna)'},
    {name: 'Shake (salmon)'},
    {name: 'Ebiko (fish roe)'},
    {name: 'Uni (sea urchin)'},
    {name: 'Creamy Spicy Tuna (raw tuna with spicy sauce)'},
    {name: 'Creamy Spicy Salmon (raw salmon with spicy sauce)'},
    {name: 'Sashimi Moriawase (5 kinds of sashimi)'}
    ];
    const riceTopping =[
    {name:'Oyako Don (sliced chicken in light soy sauce on rice)'},
    {name:'Chicken Teriyaki Don (grilled chicken with teriyaki sauce)'},
    {name:'Katsu Don (pork cutlet with special Yuujin sauce on rice)'},
    {name:'Butakatsu-Jyu (breaded deep-fried pork with vegetable)'},
    {name:'Kakiage-Jyu (seafood and vegetable tempura, on rice)'},
    {name:'Tekka-Jyu (raw tuna with dried seaweed on vinegared rice)'},
    {name:'Ten-Don (shrimp tempura with vegetable)'},
    {name:'Buta Teppan Don (pork teppanyaki on rice)'},
    {name:'Gyu Don (soy sauce-flavored beef with fresh egg on rice)'},
    {name:'Shake Teppan Don (sauteed salmon and vegetable on rice)'},
    {name:'Shake Jyu (raw salmon on bed of rice)'},
    {name:'Beef Teriyaki-Jyu (beef with teriyaki sauce on rice)'},
    {name:'Maguro Teriyaki Don (pan-grilled tuna with teriyaki sauce on rice'},
    {name:'Maguro Teppanyaki Don (sauteed tuna with bean sprouts on rice)'},
    {name:'Uni Don (sea urchin roe on bed of rice)'},
    {name:'Una-Jyu (eel with teriyaki sauce on rice)'},
    {name:'Namachirashi-Jyu (assorted raw fish on rice)'}
    ];
    const rice =[
    {name:'Gohan (white Japanese rice)'},
    {name:'Garlic Rice (fried rice with chopped garlic)'},
    {name:'Oriental Fried Rice (egg, pork and vegetables)'},
    {name:'Chicken Chahan (chicken and vegetable fried rice)'},
    {name:'Ebi Chahan (shrimp and vegetable fried rice)'},
    {name:'Omuraisu (omelette rice)'}
    ];
    const appetizerItems = appetizer.map((d) => <li key={d.name}>{d.name}</li>);
    const temakiItems = temaki.map((d) => <li key={d.name}>{d.name}</li>);
    const makimonoItems = makimono.map((d) => <li key={d.name}>{d.name}</li>);
    const sushiItems = sushi.map((d) => <li key={d.name}>{d.name}</li>);
    const sashimiItems = sashimi.map((d) => <li key={d.name}>{d.name}</li>);
    const riceToppingItems = riceTopping.map((d) => <li key={d.name}>{d.name}</li>);
    const riceItems = rice.map((d) => <li key={d.name}>{d.name}</li>);

    return (
      
      <div>
      
      <div>
      <NavBody />
      <Container id="test-container">
      <Container id="menu-container">
      <h1>Contact</h1>
      <Tabs defaultActiveKey="appetizer" id="uncontrolled-tab-example">
        <Tab className="padding-20" eventKey="appetizer" title="Ippinyori (Appetizers)">
          <h2>Ippinyori</h2>
          {appetizerItems}
        </Tab>
        <Tab eventKey="sushi" title="Sushi/Sashimi">
          <h2>Temaki (Hand-rolled)</h2>
          {temakiItems}
          <h2>Makimono (Mat-rolled Sushi)</h2>
          {makimonoItems}
          <h2>Sushi</h2>
          {sushiItems}
          <h2>Sashimi</h2>
          {sashimiItems}
        </Tab>
        <Tab eventKey="rice" title="Rice Toppings">
          <h2>Don Mono / Jyu Mono (served with Miso soup)</h2>
            {riceToppingItems}
          <h2>Gohan (rice)</h2>
            {riceItems}
          </Tab>
        <Tab eventKey="teppanyaki" title="Teppanyaki">
        
        </Tab>
        <Tab eventKey="contact" title="Noodles">
        
        </Tab>
      
      </Tabs>
      </Container>
      </Container>
      
      </div>

</div>
      )
  }
}
