import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import LoginForm from '../LogInForm/index';


class LoginPage extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       err: false,
     };
   }

   handleSubmit = (values) => {
     const config = {
       method: 'POST',
       headers: {
         'Content-type': 'application/json',
       },
       body: JSON.stringify(values),
     };
     const url = '/auth/login';
     const { history } = this.props;
     fetch(url, config)
       .then((res) => {
         if (res.status === 200) {
           history.push('/dashboard');
         } else {
           this.setState({ err: true });
         }
       });
   }

   render() {
     const { err } = this.state;
     return (
       <div>
         <h1 className="titre">Hello</h1>
         <LoginForm onSubmit={this.handleSubmit} erreur={err} />
       </div>
     );
   }
}

export default withRouter(LoginPage);