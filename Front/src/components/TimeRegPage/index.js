
import React from 'react'
import TimeRegForm from '../TimeRegForm';
import { withRouter } from 'react-router-dom';
import  {
   Container, Row, Col
} from 'reactstrap';

class TimeRegPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      success:false,
    };
  }

  handleSend = (values) => {
    alert(values)
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
      },
      body: JSON.stringify(values)
    };
    console.log(values)
    const url = 'http://localhost:5000/addTr';

    fetch(url, config)
      .then((res) => {
        if (res.status===200){
          this.setState({ success: true})
        } else {
          this.setState({ err: true });
        }
      });
  }

  render() {
    const { err, success } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <TimeRegForm onSubmit={ this.handleSend } err={ err } success={ success }/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(TimeRegPage);


