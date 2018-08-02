import React from "react";
import Home from '../home.js';
import List from '../list.js';
import Count from '../count.js';
import Githubuser from "../githubuser.js";
import Zipcode from "../zipcode.js";

export const MenuContextItem = {
  values: [
    { to: '/', name: 'Home', component: Home},     
    { to: '/zipcode', 'name': "Cep", component: Zipcode},
    { to: '/count', name: 'Contador', component: Count }, 
    { to: '/githubuser', name: 'GitHub Usuario', component: Githubuser},
    { to: '/list', name: 'Lista', component: List }    
  ]
};

export const MenuContext = React.createContext(
  MenuContextItem
);