import React, { useEffect, useState } from 'react';
import List from './List';
import Form from './Form';
import "./contactIndex.css";
import { BsInfoCircle } from "react-icons/bs";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [start, setStart] = useState(false); // Başlangıçta false

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    useEffect(() => {
        if (start) {
            const driverObj = driver({
                showProgress: true,
                steps: [
                    {
                        popover: {
                            title: "Welcome!",
                            description: "This is an app to add contacts and filter them!",
                            side: "over",
                        }
                    },
                    {
                        element: ".list",
                        popover: {
                            title: "Filtered Contacts",
                            description: "You can filter your contacts here",
                            side: "top",
                        }
                    },
                    {
                        element: ".form",
                        popover: {
                            title: "Add Contact",
                            description: "Add contacts from here!",
                            side: "left",
                        }
                    },
                ]
            });
            driverObj.drive();
        }
    }, [start]);

    // info butonuna basıldığında start state'ini true yap
    const startTour = () => {
        setStart(true);
    }

    return (
        <div>
            {/* BsInfoCircle bileşenine onClick olayını startTour fonksiyonuyla bağlayın */}
            <BsInfoCircle className="info" onClick={startTour} />
            <List className="list" contacts={contacts} />
            <Form className="form" addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
