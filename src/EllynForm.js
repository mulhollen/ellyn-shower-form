import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Container = styled.div `
    width: 100%;
    max-width: 500px;
    
    #formUNSubmitted {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #formSubmitted {
        display: none;
    }

    #formSubmitFailure {
        display: none;
    }

`

const instance = axios.create({
    baseURL: 'http://ellyn-shower.firebaseio.com/'
});

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
                    <input id="nameInput" type="name" placeholder="Name"></input>
                    <select id="numAttending" name="Number Attending">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="25">2.5</option>
                    </select>
                </div>
                <input id="emailInput" type="email" placeholder="Email"></input>
                <div className="formRadio">
                    <input id="rsvpYes" type="radio" name="rsvp" value="yes" checked />
                    <label for="rsvp">We'll see you there!</label>
                    
                    <input type="radio" name="rsvp" value="no" />
                    <label for="rsvp">Have fun without us</label>

                </div>
                <button onClick={postEmail}>RSVP</button>
            </div>
            <div id="formSubmitted">
                <h3>Thanks!</h3>
            </div>
            <div id="formSubmitFailure">
                <h3>Hmm. Looks like something went wrong. </h3>
                <p>You can refresh and try again of email <a href="mailto:lindsaymulhollen@gmail.com">lindsaymulhollen@gmail.com</a></p>
            </div>
        </Container>

    );
}


export default EllynForm;