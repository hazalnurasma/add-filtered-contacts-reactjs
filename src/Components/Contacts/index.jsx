import React, {useEffect, useState} from 'react';
import List from './List';
import Form from './Form';
import "./contactIndex.css";
import { BsInfoCircle } from "react-icons/bs";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    useEffect(() => {

        const driverObj = driver({
          showProgress: true,
          steps: [
            {
                popover: {
                    title:"Welcome!",
                    description: "This is an app to add contacts and filtered them!",
                    side:"over",
                }
            },
            {
              element: ".list",
              popover: {
                title: "✨ Welcome to Arçelik AI App Wizard!",
                description: "Start exploring our site so we can serve you better.",
                side: "top",
              }
            },
            {
              element: ".form",
              popover: {
                title: "Step",
                description: "You can watch your progress here.",
                side: "left",
              }
            },
          ]
        });
        driverObj.drive();
      });

    return (
        <div>
            <BsInfoCircle className="info" />
            <List className="list" contacts={contacts}/>
            <Form className="form" addContact={setContacts} contacts={contacts}/>
        </div>
  )
}

export default Contacts