import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';
import NavBody from './NavBody';
import {
  Temaki, Appetizer, Makimono, Sushi, Sashimi, RiceTopping, Rice, Yakimono, Agemono,
  Teppanyaki, HotNoodle, ColdNoodle, Salad, HotPot, Dessert, Beverages,
} from './MenuItems/Index';


const Menu = () => (

  <div>

    <div>
      <NavBody />
      <Container id="test-container">
        <Container id="menu-container">

          <h1>Contact</h1>
          <Tabs defaultActiveKey="appetizer" id="uncontrolled-tab-example">
            <Tab className="padding-20" eventKey="appetizer" title="Appetizers / Salads">
              <h2>Ippinyori (Appetizer)</h2>
              <Appetizer />
              <h2>Salads</h2>
              <Salad />
            </Tab>
            <Tab eventKey="sushi" title="Sushi / Sashimi">
              <h2>Temaki (Hand-rolled)</h2>
              <Temaki />
              <h2>Makimono (Mat-rolled Sushi)</h2>
              <Makimono />
              <h2>Sushi</h2>
              <Sushi />
              <h2>Sashimi</h2>
              <Sashimi />
            </Tab>
            <Tab eventKey="rice" title="Rice Toppings">
              <h2>Don Mono / Jyu Mono (served with Miso soup)</h2>
              <RiceTopping />
              <h2>Gohan (rice)</h2>
              <Rice />
            </Tab>
            <Tab eventKey="entree" title="Entrée">
              <h2>Yakimono (grilled dish)</h2>
              <Yakimono />
              <h2>Agemono (deep-fried dish)</h2>
              <Agemono />
            </Tab>
            <Tab eventKey="teppanyaki" title="Teppanyaki">
              <h2>Teppanyaki (cooked on iron sheet)</h2>
              <Teppanyaki />
            </Tab>
            <Tab eventKey="noodles" title="Noodles / Hot Pot">
              <h2>Hot Noodles</h2>
              <HotNoodle />
              <h2>Cold Noodles</h2>
              <ColdNoodle />
              <h2>Nabemono (cooked in hot pot / casserole) </h2>
              <HotPot />
            </Tab>
            <Tab eventKey="beverages" title="Onomimono (Beverages)">
              <h2>Onomimono</h2>
              <Beverages />
            </Tab>
            <Tab eventKey="dessert" title="Dessert">
              <h2>Dessert</h2>
              <Dessert />
            </Tab>

          </Tabs>
        </Container>
      </Container>

    </div>

  </div>
);


export default Menu;
