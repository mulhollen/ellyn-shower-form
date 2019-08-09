import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import regristry1 from'./target.jpeg';
import regristry2 from'./amazon.png';


const Container = styled.div `
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    
    p {
        font-family: sans-serif;
    }

    #formUNSubmitted {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        input,
        select {
            border: none;
            border-bottom: 2px solid #b76a53;
            border-radius: 0;
        }

        input:focus,
        select:focus {
            outline: 0;
            border-bottom: 2px solid #3B312F;
        }

        > div {
            width: 100%;
            margin: 8px 0;
            display: flex;
        }

        > div:first-of-type,
        > div:nth-of-type(3) {
            label {
                width: 20%;
                margin-right: 2%;
            }
            input {
                width: 78%;
            }
        }

        div:nth-of-type(2) {
            label {
                margin-right: 2%;
            }
        }

        #rsvpButton {
            align-self: center;
            width: 288px;
            height: 40px;
            background: #b76a53;
            border-radius: 2px;
            border: 2px solid #b76a53;
            font-size: 17px;
            font-weight: bold;
            margin: 12px auto;
        }
    }

    .formRadio {
        display: flex;
        flex-direction: column;

        > div {
            justify-content: flex-start;
            display: flex;
        }
    }

    #formSubmitted {
        display: none;
    }

    #formSubmitFailure {
        display: none;
        flex-direction: column;
    }

    .multiInput {
        display: flex;
    }

    #regristry {
        display: flex;
        justify-content: space-between;

        img {
            width: 150px;
            height: 150px;
        }
    }
    
    .needsFilled {
        backgroundColor: "#FADE77"
    }

`



const EllynForm = () => {



    function postEmail() {

        let yesno
        document.getElementById("rsvpYes").checked === true
        ?
        yesno = "yes"
        :
        yesno = "no"

        var name = document.getElementById("nameInput").value
        var number = document.getElementById("numAttending").value
        var email = document.getElementById("emailInput").value

        console.log("name", name)
        console.log("number", number)
        console.log("name", email)
        console.log("yesno", yesno)

        name = "" ? document.getElementById("nameInput").classList.add("needsFilled") :
        email = "" ? document.getElementById("emailInput").classList.add("needsFilled") :
        

  
        axios.post(`http://ellyn-shower.firebaseio.com/${yesno}/${name}`,
            {
                "ammountOfGuests": number,
                "contact": email
            })
            .then(res => {
                PostedSucess()
            })
            .catch(err => {
                PostedFailure()
            });

    }


    function PostedSucess() {
        document.getElementById("formUNSubmitted").style.display = "none";
        document.getElementById("formSubmitted").style.display = "flex";
    }

    function PostedFailure() {
        document.getElementById("formUNSubmitted").style.display = "none";
        document.getElementById("formUNSubmitted").style.display = "none";
        document.getElementById("formSubmitFailure").style.display = "flex";
    }

    return (

        <Container>
            <div id="formUNSubmitted">
                <div>
                    <label for="name">Your Name:</label>
                    <input id="nameInput" type="name" name="name" placeholder="Name"></input>
                </div>
                <div id="numberAttendingGroup">
                    <label for="numberAttending">How many people should we expect?</label>
                    <select id="numAttending" name="numberAttending">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="25">2.5</option>
                    </select>
                </div>
                <div>
                    <label for="email">Your Email:</label>
                    <input id="emailInput" name="email" type="email" placeholder="Email"></input>
                </div>
                <div className="formRadio">
                    <div>
                        <input id="rsvpYes" type="radio" name="rsvp" value="yes" checked />
                        <label for="rsvp">We'll see you there!</label>
                    </div>
                    <div>
                        <input type="radio" name="rsvp" value="no" />
                        <label for="rsvp">Have fun without us</label>
                    </div>
                </div>
                <button id="rsvpButton" onClick={postEmail}>RSVP</button>
            </div>
            <div id="formSubmitted">
                <h3>Thanks!</h3>
            </div>
            <div id="formSubmitFailure">
                <h3>Hmm. Looks like something went wrong. </h3>
                <p>You can refresh and try again of email <a href="mailto:lindsaymulhollen@gmail.com">lindsaymulhollen@gmail.com</a></p>
            </div>
            <div id="regristry">
                <a href="" target="_blank"><img src={regristry1} alt="target baby registry logo"></img></a>
                <a href="" target="_blank"><img src={regristry2} alt="amazon baby registry logo"></img></a>
            </div>
        </Container>

    );
}


export default EllynForm;