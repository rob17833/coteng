import React from 'react';
import WorkSheet from '../WorkSheet';

class WorkSheetPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			worksheet: []
		};
	}
// insert params to get user values
	componentDidMount() {
		let inital = [];
		const user = this.props.userValues
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
				});
			});
	}
// attempt to trigger refresh this page
	refresh = () => {
		return document.location.reload(true)
	}

	render() {
		return (
			<div>
				<WorkSheet state={this.state} />
			</div>
		)

	}
}

export default WorkSheetPage;