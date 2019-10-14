import React from 'react';
// import Slot from '../Slot';
import { Table } from 'reactstrap';

class Worksheet extends React.Component {
	//eslint-disable-next-line
	constructor() {
		super();
		this.state = {
			headers : ['Who',
								'Date',
								'Start Time',
								'End Time',
								'Issue Number',
								'Issue Name',
								'Customer',
								'Invoice Code',
								'Type',
								'Ticket Number',
								'Ticket Country',
								'Description']
		};

	}

	renderTableData() {
		return this.props.state.worksheet.map((slot, index) =>{
			const {
				date,
				startTime,
				endTime,
				customer_Id,
				invoiceCode_Id,
				workType_Id,
				issueNumber_Id,
				issueName_Id,
				description,
				ticketCountry_Id,
				ticketNumber_Id,
				employee_Id
			} = slot
			return (
				<tr key={index}>
					<td>{employee_Id}</td>
					<td>{date}</td>
					<td>{startTime}</td>
					<td>{endTime}</td>
					<td>{issueNumber_Id}</td>
					<td>{issueName_Id}</td>
					<td>{customer_Id}</td>
					<td>{invoiceCode_Id}</td>
					<td>{workType_Id}</td>
					<td>{ticketNumber_Id}</td>
					<td>{ticketCountry_Id}</td>
					<td>{description}</td>
				</tr>
			)
		})
	}

	renderTableHeader() {
		return this.state.headers.map((key, index) => {
			return <th key={index}>{key}</th>
		})
	}
	// {this.props.state.worksheet.map((slot, index) => <Slot key={index} slot={slot} />)}

	render() {
		return (
			<div>
				<Table striped responsive size="sm">
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
						{this.renderTableData()}
					</tbody>
				</Table>
			</div>
		)
	}
}

export default Worksheet;