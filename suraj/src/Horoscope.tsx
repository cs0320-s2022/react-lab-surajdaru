import React, {useState} from 'react';
import TextBox from "./TextBox";
import axios from 'axios';
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Horoscope() {


    //TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.

    const requestHoroscope = () => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            sun: sunState,
            moon: moonState,
            rising: rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then((response) => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data['horoscope']);
            })
            .catch(error => {
                console.log(error);
            });

    }


    const [sunState, setSunState] = useState("")
    const [moonState, setMoonState] = useState("")
    const [rising, setRisingState] = useState("")
    const [horoscope, setHoroscope] = useState([])

    return (
        <div className="Horoscope">
            <TextBox label={"Sun Sign"} change = {setSunState}/>
            <TextBox label={"Moon Sign"} change = {setMoonState}/>
            <TextBox label={"Rising Sign"} change = {setRisingState}/>
            <AwesomeButton onPress={requestHoroscope} type={"primary"}>
                Press This
            </AwesomeButton>
            {horoscope.map(element => <div>{element}</div>)}
        </div>
    );
}

export default Horoscope;