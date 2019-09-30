import React from 'react';
import WorkSheet from '../WorkSheet';

class DevPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            worksheet : []
        };
    }

    componentDidMount(){
        this.getData()
    }

    getData() {
        fetch('http://localhost:5000/ws')
        .then(result => result.json())
        .then(data => {
            this.setState({
                worksheet : data.value
            })
        })
    }

    render() {
        return (
            <div>
                <WorkSheet data={this.state.worksheet} />
                <button className='getworksheet' onClick={()=> this.getData()}>
                    Get WorkSheet
                </button>
            </div>
        )
    
    }
}

export default DevPage;