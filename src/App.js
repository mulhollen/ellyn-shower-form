import React from 'react';
import EllynFrom from './EllynForm';
import styled from 'styled-components';

import invite from'./invite.png';


const Container = styled.div `
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center

    img {
      margin: 20px auto;
      width: 30vw;

      @media (max-width: 500px) {
        width: 70vw;
      }
    }
`

var currentDate = new Date ()
var endDate = new Date('2019-10-05')

function App() {
  return (
    <Container>
      <img src={invite} alt="Ellyn and Murphy Baby Shower Invite" />
      {
        currentDate < endDate
        ?
        <EllynFrom />
        :
        <div>please reach out to lindsay</div>
       }
    </Container>
  );
}

export default App;
