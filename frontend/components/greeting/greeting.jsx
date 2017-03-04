import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
  }

  render(){
    let style = {
      backgroundColor: "rgba(0, 0, 0, 0.57)",
      position: "absolute",
      left: "45%",
      top: "45%",
      color: "white"
    };
    return (
      <div className="main-splash">
        <FlatButton style={style} label="Login" onClick={() => this.redirect('login')} />
      </div>
    );
  }
}

export default Greeting;
