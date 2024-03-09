import React, { useState, useEffect } from 'react';
import './formIndex.css';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";


// 2. yöntem çok sayıda input olması durumunda: 
// const initialFormValues = { fullname: '', phoneNumber: ''};

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({ fullname: '', phoneNumber: ''})
    // const [form, setForm] = useState({ fullname: '', phoneNumber: ''})

    // form gönderildikten sonra inputlar temizlensin 3. yöntem
    useEffect(() => {
        setForm({fullname: '', phoneNumber: ''});
    }, [contacts])

    // input içeriği değiştiğinde state'e atamasını yapacak fonksiyon:
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    // butona basıldığında devreye girecek fonksiyon:
    const onSubmit = (e) => {
        e.preventDefault(); // form default ayarı bıraksın diye
        if ( form.fullname === '' || form.phoneNumber === '' ) {
            return false;
        }
        
        addContact([...contacts, form]);
        
        
        // setForm({fullname: '', phoneNumber: ''}); // 1.yöntem form gönderildikten sonra inputlar temizlensin
        // setForm(initialFormValues); 
    };

 

  return (
    <>
        <form className='form' onSubmit={onSubmit}>

            <div className="inputs">
                <h2>Add Contact</h2>
                <input 
                className="input" 
                name="fullname" 
                value={form.fullname}
                placeholder='Full Name' 
                onChange={onChangeInput}
                />

                <input 
                className="input" 
                name="phoneNumber" 
                value={form.phoneNumber}
                placeholder="Phone Number" 
                onChange={onChangeInput}
                />
                
            </div>

            <div className="button">
                <button className="add-btn" type='submit'>Add</button>
            </div>

        </form>
    </>
  )
}

export default Form