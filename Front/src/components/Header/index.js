import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'reactstrap';
const Header = props => {
	const { userValues } = props;
	console.log(userValues);
	return (
		<Container fluid={true}>
			<Row>
				<Col md='12'>
					<h1>Coteng</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						You are connected as: {userValues} 
					</p>
				</Col>
				<Col>
					<NavLink to='/' tag={RRNavLink}>Logout</NavLink>
				</Col>
			</Row>
		</Container>
	)
}

export default Header;