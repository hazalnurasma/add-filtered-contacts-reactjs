import React, { useEffect, useState } from 'react';
import List from './List';
import Form from './Form';
import "./contactIndex.css";
import { BsInfoCircle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
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
                            title: " Welcome to Contact App!",
                            description: "This is an app that enables you to add contacts and search them by filtered!",
                            side: "over",
                        }
                    },
                    {
                        element: ".list",
                        popover: {
                            title: "Filtered Contacts",
                            description: "You can filter your contacts here with their name or phone numbers.",
                            side: "top",
                        }
                    },
                    {
                        element: ".form",
                        popover: {
                            title: "Add Contact",
                            description: "You can add new contact from here.",
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
        setStart(!start);
    };

    return (
        <div>
            <div className="icons">
                <FaArrowRight className='arrow'/>
                <BsInfoCircle className="info" onClick={startTour} />
            </div>

            <List className="list" contacts={contacts} />
            <Form className="form" addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
