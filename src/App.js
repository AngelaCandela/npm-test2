import React from 'react';
import { useState } from 'react';
import { List, Table, Agenda } from 'react-components-bundle-ad';

function App() {

  const products = [
    {id: 30, product: "Galletas", brand: "María", price: 0.90},
    {id: 31, product: "Ensalada", brand: "Imizurra", price: 1.30},
    {id: 32, product: "Patatas", brand: "McKain", price: 0.90},
    {id: 33, product: "Pasta", brand: "Gallo", price: 0.90},
  ];
  
  const [contacts, setContacts] = useState([
    {name: "John", lastName: "Smith", address: "Calle Compositor Lehmberg Ruiz", province: "Almería", postcode: "04008", phone: "648560349"},
    {name: "Sarah", lastName: "Donovan", address: "Calle Marqués de Larios", province: "Málaga", postcode: "29008", phone: "661284186"},
    {name: "Kate", lastName: "Doe", address: "Calle 2", province: "Madrid", postcode: "29630", phone: "611284133"},
  ]);
  
  return (
    <div className="App"> 
      <List category="Food and Drinks" products={products} />
      <Table />     
      <Agenda contacts={contacts} setContacts={setContacts}/>
    </div>
  );
}

export default App;
