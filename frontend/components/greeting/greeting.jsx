import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  linkSignIn(){
    return (
      <Link onClick={() => this.redirect('/')}>
        Sign In
      </Link>
    );
  }

  linkSignOut(){
    return (
      <Link to='/' onClick={this.props.logout}>
        Log Out
      </Link>
    );
  }

  render(){
    return (
      <div className="main splash">
        <div className='greeting'>
          <h1 className=""></h1>
        </div>
      </div>
    );
  }
}

export default Greeting;
