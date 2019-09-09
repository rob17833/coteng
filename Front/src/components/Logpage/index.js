
import React from 'react'
import Logform from '../Logform';
import { withRouter } from 'react-router-dom';

class Logpage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <Logform onSubmit={this.submit} />
  }
}

export default withRouter(Logpage);

