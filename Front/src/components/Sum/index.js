import React from 'react';
import { Container } from 'reactstrap';

const Sum = (props) => {
  const { sum } = props;
  return(
  <Container>
    <h3>Total : {sum}</h3>
  </Container>
  )
};

export default Sum;