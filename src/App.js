import React from 'react';
import EllynFrom from './EllynForm';
import styled from 'styled-components';


const Container = styled.div `
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center
`

var currentDate = new Date ()
var endDate = new Date('2019-10-05')

function App() {
  return (
    <Container>
      <h1>It Takes A Village</h1>
      <img src="invite.png" alt="Ellyn and Murphy Baby Shower Invite" />
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
