import React from 'react';
import { Table, Container } from 'reactstrap';

class DataTable extends React.Component {
	//eslint-disable-next-line
	constructor() {
		super();
		this.state = {
			headers : [
				'Employee',
				'Date',
				'Issue Number',
				'Issue Name',
				'Customer',
				'Invoice Code',
				'Ticket Number',
				'Ticket Country',
				'Number Hours'
			]
		};
	};

	renderTableData() {
		return this.props.state.result.map((slot, index) =>{
			const {
				time,
				employee_Id,
				date,
				customer_Id,
				invoiceCode_Id,
				issueNumber_Id,
				issueName_Id,
				ticketCountry_Id,
				ticketNumber_Id,
			} = slot
			return (
				<tr key={index}>
					<td>{employee_Id}</td>
					<td>{date}</td>
					<td>{issueNumber_Id}</td>
					<td>{issueName_Id}</td>
					<td>{customer_Id}</td>
					<td>{invoiceCode_Id}</td>
					<td>{ticketNumber_Id}</td>
					<td>{ticketCountry_Id}</td>
					<td>{time}</td>
				</tr>
			)
		});
	};

	renderTableHeader() {
		return this.state.headers.map((key, index) => {
			return <th key={index}>{key}</th>
		})
	}

	render() {
		return (
			<div>
				<Container>
					<Table striped responsive size="sm">
						<tbody>
							<tr>{this.renderTableHeader()}</tr>
							{this.renderTableData()}
						</tbody>
					</Table>
				</Container>
			</div>
		)
	}
};

export default DataTable;