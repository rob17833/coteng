import React from 'react';
import { withRouter } from 'react-router-dom';
import { getFormValues } from 'redux-form';
import Header from '../Header';
import DataTable from '../DataTable';
import GetIntervalForm from '../GetIntervalForm';
import { connect } from 'react-redux';


class Didier extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user : '',
			result : [],
			start : '',
			end : ''
		}
	}

	componentWillMount(){
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
    const url = 'http://localhost:5000/startDate/endDate';
		fetch(url, config)
			.then(response => {
				return response.json();
			})
			.then(data => {
				fullWorksheet = data.map((element) => {
					return element
				});
				this.setState({
					result: fullWorksheet,
				});
			});
	};

	render(){
		return (
			<div> 
				<Header userValues={this.state.user} />	
				<GetIntervalForm onSubmit={this.handleSubmit} />
				<DataTable state={ this.state } />
			</div>	
		)
	};
}

export default withRouter(connect(state => ({
  userValues : getFormValues('logform')(state),
})) (Didier));