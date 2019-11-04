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
		const data = this.props.datas
		this.setState({
			worksheet: data
		})
		console.log(this.props.datas);
	}
// attempt to trigger refresh this page
	UNSAFE_componentWillUpdate(prevProps, prevState) {
		if (prevProps.update !== this.props.update){
			this.componentDidMount()
		};
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