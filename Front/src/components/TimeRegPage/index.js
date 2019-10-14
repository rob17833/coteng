
import React from 'react';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import TimeRegForm from '../TimeRegForm';
import Header from '../Header';
import { withRouter } from 'react-router-dom';
import WorkSheetPage from '../WorkSheetPage';
import { Container } from 'reactstrap';

class TimeRegPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      success:false,
      user: ''
    };
  }

  componentWillMount(){
    this.setState({
      user: this.props.userValues.username,
      forceUnregisterOnUnmount: true
    })
  }

  handleSend = (values) => {
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
      // last thing I've done on last friday
    this.props.reset()
  }
  
  render() {
    const { err, success } = this.state;
    return (
      <div>
        <Header userValues={this.props.userValues} />
        <TimeRegForm onSubmit={ this.handleSend } err={ err } success={ success }/>
        <Container fluid={true}>
          <WorkSheetPage userValues={this.state.user} />
        </Container>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  userValues : getFormValues('logform')(state),
})) (TimeRegPage));

// export default withRouter(TimeRegPage);


