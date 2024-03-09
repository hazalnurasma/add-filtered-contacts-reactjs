import React, {useState, useEffect} from 'react';
import './listIndex.css';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";


function List({ contacts }) {
    const [filterText, setFilterText] = useState('');
    const [divHeight, setDivHeight] = useState('30vh');

    // filtreleme işlemi
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLowerCase()));
    });
    // objeteki itemların keylerini alır. (fullname ve phonenumber)
    // some yani key'in içinde bulunduğu herhangi bir tanesi
    //  item'ı string'e ve lower case'e çevir.
    //  filterText'e yazılanı içersin (include)

    console.log("Filtered:", {filtered});


    // input değeri değiştiğinde div yüksekliğini güncelle
    const handleInputChange = (e) => {
        setFilterText(e.target.value);
        setDivHeight('auto'); // input değiştiğinde div yüksekliği otomatik olacak
    };


  return (
    <div className='list'>
        <h2 className='cont'>Contact App</h2>
        <div className="bck">
            <h3>You can filter your contact from here:</h3>
            <input 
            className='input'
            placeholder='Filter' 
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            />

            <ul>
                {
                    filtered.map((contacts, index) => <li className="liler" key={index}><b>Name:</b> {contacts.fullname} <br /> <b>Phone Number:</b> {contacts.phoneNumber}</li>)
                }
            </ul>
        </div>

    </div>
  )
}

export default List;