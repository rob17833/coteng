
import React from 'react';
import TimeRegForm from '../TimeRegForm';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class TimeRegPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'form'
    };
  }

//get nbr of hours from entries+today's date and fetch
  handleSend = (values) => {
    const a = moment.duration(values.startTime, 'HH:mm');
    const b = moment.duration(values.endTime, 'HH:mm' );
    const c = b.subtract(a).asMinutes();
    values.time = c/60;
    values.employee_Id = this.props.user;
    values.date = this.props.getToday();
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
      },
      body: JSON.stringify(values)
    };
    
    const url = 'http://localhost:5000/addTr';

    fetch(url, config)
    .then((res) => {
      if (res.status===200){
        this.setState({ status: 'success'});
      } else {
        this.setState({ status: 'fail' });
      }
    })
    .then(setTimeout(function (){
      this.setState({
        status: 'form',
      });}.bind(this), 2000,
      ))
    .then(()=>this.props.getData())
  };
  
  
  render() {
    const { status } = this.state;
    return (
      <div>
        <TimeRegForm
          updateValues={this.props.updateValues}
          onSubmit={ this.handleSend }
          status={ status } 
          initialValues={this.props.initialValues}
          />
      </div>
    );
  }
}

// export default withRouter(connect(state => ({
//   userValues : getFormValues('logform')(state),
// })) (TimeRegPage));

export default withRouter(TimeRegPage);


