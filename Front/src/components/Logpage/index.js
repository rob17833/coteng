
import React from 'react'
import Logform from '../Logform';
// import  Header from '../Header';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Logpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false
    };
  }

  // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  
  handleSubmit = (values) => {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    
    const url = 'http://localhost:5000/auth/login';
    const { history } = this.props;
    
    fetch(url, config)
      .then((res) => {
        if (res.status === 200){
          if(values.username==='didier'){
            history.push('/didier')
          } else {
            history.push('/timereg')
          }
        } else {
          this.setState({ err: true })
        }
      });
  }

  render() {
    const { err } = this.state;
    return(
      <Container>
        <Row>
          <Col>
            <Logform onSubmit={ this.handleSubmit } err={ err } />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Logpage);

