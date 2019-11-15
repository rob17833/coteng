import React from 'react';
import { withRouter } from 'react-router-dom';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import Header from '../Header';
import DataTable from '../DataTable';
import GetIntervalForm from '../GetIntervalForm';
import Sum from '../Sum';


class Didier extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user : '',
			result : [],
			total: 0
		}
	}
	
	UNSAFE_componentWillMount(){
		this.setState({
			user : localStorage.getItem("username")
    });
	}
	
	handleSubmit = (values) => {
		let fullWorksheet = [];
		const config = {
			method: 'POST',
      headers: {
				'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
      },
      body: JSON.stringify(values)
    };
    const url = 'http://localhost:5000/period';
		fetch(url, config)
		.then(response => {
			return response.json();
		})
		.then(data => {
			fullWorksheet = data.map((element) => {
				return element
			});
			const sumHours = fullWorksheet.reduce((prev, cur)=> prev + cur.time, 0);
			this.setState({
				result: fullWorksheet,
				total: sumHours
			});
			console.log(this.state.total);
		});
	};

	render(){
		return (
			<div> 
				<Header userValues={this.state.user} />	
				<GetIntervalForm onSubmit={this.handleSubmit} />
				<DataTable state={ this.state } />
				<Sum sum={this.state.total} />
			</div>	
		)
	};
}

export default withRouter(connect(state => ({
  userValues : getFormValues('logform')(state),
})) (Didier));