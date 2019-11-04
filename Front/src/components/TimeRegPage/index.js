
import React from 'react';
// import { getFormValues } from 'redux-form';
// import { connect } from 'react-redux';
import TimeRegForm from '../TimeRegForm';
import Header from '../Header';
import { withRouter } from 'react-router-dom';
import WorkSheetPage from '../WorkSheetPage';
import { Container } from 'reactstrap';
import moment from 'moment';

class TimeRegPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'form',
      user: localStorage.getItem('username'),
      refreshSheet: true,
      worksheet: []
    };
  }
  //refund: move to WorkSheetPage and pass it by props to TimeRegPage
  // UNSAFE_componentWillMount(){
  //   this.setState({
  //     user : localStorage.getItem("username"),
  //   });
  // }

  componentDidMount() {
		let inital = [];
		const user = this.state.user
		fetch(`http://localhost:5000/search?username=${user}`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				inital = data.map((element) => {
					return element
				});
				console.log(inital);
				this.setState({
          worksheet: inital,
          // user : localStorage.getItem('username')
				});
			});
	}
// set form date 'today' don't touch
  Today = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`
  }
//get nbr of hours from entries+today's date and fetch don't touch
  handleSend = (values) => {
    const a = moment.duration(values.startTime, 'HH:mm');
    const b = moment.duration(values.endTime, 'HH:mm' );
    const c = b.subtract(a).asMinutes();
    values.time = c/60;
    values.employee_Id = this.state.user;
    values.date = this.Today();
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
        this.setState({ status: 'success'})
      } else {
        this.setState({ status: 'fail' });
      }
    })
    .then(setTimeout(function (){
      this.setState({
        status: 'form',
        refreshSheet: !this.state.refreshSheet
      });}.bind(this), 2000
      ));
      console.log(this.state.refreshSheet);
  }
   
  render() {
    const { status, worksheet, user } = this.state;
    console.log(worksheet);
    return (
      <div>
        <Header userValues={this.state.user} />
        <TimeRegForm
          onSubmit={ this.handleSend }
          status={ status } 
          initialValues={{employee_Id: {user}, date: this.Today()}}
          />
        <Container fluid={true}>
          <WorkSheetPage datas={ worksheet } />
        </Container>
      </div>
    );
  }
}

// export default withRouter(connect(state => ({
//   userValues : getFormValues('logform')(state),
// })) (TimeRegPage));

export default withRouter(TimeRegPage);


