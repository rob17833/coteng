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
			route:true,
			updateSlot: 0,
			initialvalues: {
				employee_Id: localStorage.getItem('username'),
				date: this.getToday()
			},
		};
		this.getData = this.getData.bind(this);
		this.deleteData = this.deleteData.bind(this);
		this.getToday = this.getToday.bind(this);
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

	
	getData () {
		const user = this.state.initialvalues.employee_Id;
		let inital = [];
		const url = `http://localhost:5000/search?username=${user}`;
		const config = {
			method: 'POST',
      headers: {
				'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
      },
      body: JSON.stringify(this.state.initialvalues)
		};
		// console.log(`check body before sending ${config.body}`);
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
				route:true
			});
		});
	}
	
	getDataByDate = (values) => {
		const date = values.date
		this.setState({
			initialvalues:{
				date: date,
				employee_Id: localStorage.getItem('username')
			}
		}, ()=>console.log(this.state.initialvalues.date));
		setTimeout(()=>this.getData(), 500);
	};



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
      } else {
        console.log('merrrrdddeeeee ;(')
      }
		})
	};

	loadValues=(deleteSlot)=>{
		console.log(`deleteslot nb:${deleteSlot}`);
		const editValues = this.state.worksheet.filter(el=>el.timeRegistrationId===deleteSlot);
		this.setState({
			updateSlot: deleteSlot,
			route:false,
			initialvalues:{
				employee_Id: localStorage.getItem('username'),
				date: editValues[0].date,	
				startTime: editValues[0].startTime,
				endTime: editValues[0].endTime,
				time: editValues[0].time,
				customer_Id: editValues[0].customer_Id, 
				invoiceCode_Id: editValues[0].invoiceCode_Id,
				issueNumber_Id: editValues[0].issueNumber_Id,
				issueName_Id: editValues[0].issueName_Id,
				workType_Id: editValues[0].workType_Id,
				ticketNumber_Id: editValues[0].ticketNumber_Id,
				ticketCountry_Id: editValues[0].ticketCountry_Id,
				description: editValues[0].description
			}
		});
	};
	
	render() {
		const { initialvalues, route, updateSlot } = this.state;
		// console.log(initialvalues);
		return (
			<div>
        <Header userValues={this.state.initialvalues.employee_Id} />
				<TimeRegPage route={route} initialValues={initialvalues} getToday={this.getToday}  getData={this.getData} timeRegistrationId={updateSlot} />
				<SearchBar onSubmit={this.getDataByDate} />
				<WorkSheet  editValues={this.loadValues} deleteRow={this.deleteData} state={this.state} />
			</div>
		)
	}
}

export default withRouter(WorkSheetPage);

// export default withRouter(connect(state => ({
//   userDate : getFormValues('searchbar')(state),
// })) (WorkSheetPage));