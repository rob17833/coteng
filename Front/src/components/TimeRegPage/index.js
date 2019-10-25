
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
      status: 'form',
      user: ''
    };
  }

  componentWillMount(){
    this.setState({
      user : localStorage.getItem("username")
    });
  }

  Today = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`
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
    console.log(config.body)
    const url = 'http://localhost:5000/addTr';

    fetch(url, config)
    .then((res) => {
      if (res.status===200){
        this.setState({ status: 'success'})
      } else {
        this.setState({ status: 'fail' });
      }
    })
    .then(setTimeout(function (){
      this.setState({
        status: 'form'
      });}.bind(this), 2000
    ));
  }
   
  render() {
    const { status } = this.state;
    return (
      <div>
        <Header userValues={this.state.user} />
        <TimeRegForm
          onSubmit={ this.handleSend }
          status={ status } 
          initialValues={{employee_Id: this.state.user, date: this.Today()}}
        />
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


