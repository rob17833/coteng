
import React from 'react';
import TimeRegForm from '../TimeRegForm';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class TimeRegPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'form',
    };
  }

//get nbr of hours from entries+today's date and fetch
  handleSend = (values) => {
    let route = this.props.route;
    if(route===true){
      const a = moment.duration(values.startTime, 'HH:mm');
      const b = moment.duration(values.endTime, 'HH:mm' );
      const c = b.subtract(a).asMinutes();
      values.time = c/60;
      values.employee_Id = this.props.initialValues.employee_Id;
      values.date = this.props.initialValues.date;
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
    }else{
      const configUpdate = {
        method:'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type':'application/json',
        },
        body: JSON.stringify(values)
      };
      console.log(`body before update = ${configUpdate.body}`)
      const urlUpdate = `http://localhost:5000/update/${this.props.timeRegistrationId}`;
      console.log(`id to update: ${this.props.timeregistrationId}`);
      fetch(urlUpdate, configUpdate)
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
  };

  // UNSAFE_componentWillReceiveProps(nextProps){
  //   if(this.state.initialValues !== nextProps.initialValues){
  //     this.setState({
  //       initialValues : this.props.initialValues
  //     }, ()=>console.log(this.state.initialValues));
  //   };
  // }
  
  
  render() {
    const { status } = this.state;
    // console.log(this.props.initialValues);
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


