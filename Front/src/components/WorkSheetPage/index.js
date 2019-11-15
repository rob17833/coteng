import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkSheet from '../WorkSheet';
import TimeRegPage from '../TimeRegPage';
import Header from '../Header';
import SearchBar from '../SearchBar';

class WorkSheetPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			worksheet: [],
			user: localStorage.getItem('username'),
			getDataByDate: this.getToday(),
			initialvalues: {startTime:'',
											endTime:'',
											customer_Id:'', 
											invoiceCode_Id:'',
											issueNumber_Id:'',
											issueName_Id:'',
											workType_Id:'',
											ticketNumber_Id:'',
											ticketCountry_Id:'',
											description:'sdfgsdfgdfg'
										},
			edit:''
		};
		this.getData = this.getData.bind(this);
		this.deleteData = this.deleteData.bind(this);
		this.getToday = this.getToday.bind(this);
		console.log(`state ${this.state.getDataByDate}`);
	}
	
	getToday () {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		return `${yyyy}-${mm}-${dd}`
	}

	componentDidMount () {
		this.getData();
	};

	handleSubmit = (values) => {
		const date = values.date
		this.setState({
			getDataByDate: date
		});
		console.log(this.state.getDataByDate);
	};

	getData () {
		const user = this.state.user;
		let inital = [];
		const url = `http://localhost:5000/search?username=${user}`;
		const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
      },
      body: JSON.stringify(this.state)
		};
		console.log(`check date before sending ${config.body}`);
		fetch(url, config)
		.then(response => {
			return response.json();
		})
		.then(data => {
			inital = data.map((element) => {
				return element
			});
			this.setState({
				worksheet: inital,
			});
		});
	}
	
	deleteData (deleteSlot) {
		const config = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
				'Content-type':'application/json',
				'Acces-Control-Allow-Origin-Methods': 'DELETE',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD'
      },
		};
		const url = `http://localhost:5000/delete/${deleteSlot}`;
		fetch(url, config)
		.then((res) => {
      if (res.status===200){
				this.getData();
				console.log('');
      } else {
        console.log('merrrrdddeeeee ;(')
      }
		})
	};

	loadValues(deleteSlot){
		const editValues = this.state.worksheet.filter(el=>el.timeRegistrationId===deleteSlot);
		console.log(editValues);
	}

	render() {
		const { user, initialvalues } = this.state;
		return (
			<div>
        <Header userValues={user} />
				<TimeRegPage initialvalues={initialvalues} getToday={this.getToday}  getData={this.getData} user={user} />
				<SearchBar onSubmit={this.handleSubmit} />
				<WorkSheet  editValues={this.loadValues} deleteRow={this.deleteData} state={this.state} />
			</div>
		)
	}
}

export default withRouter(WorkSheetPage);

// export default withRouter(connect(state => ({
//   userDate : getFormValues('searchbar')(state),
// })) (WorkSheetPage));