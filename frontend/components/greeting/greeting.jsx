import React from 'react';
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
      display: "block",
      margin: "auto",
      top: "45%",
      color: "white"
    };

    let style_2 = {
      width: "100%",
      textAlign: "center",
      position: "absolute",
      bottom: 0,
      background: "rgba(180, 174, 174, 0.7)"
    };

    return (
      <div className="main-splash">
        <FlatButton style={style} label="Login to Real Time Chat" onClick={() => this.redirect('login')} />
        <div style={style_2}>
          <a href="https://github.com/randyjap/around_the_world" target="_blank">
            <img className="social-links" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853612/GitHub-Mark-64px_rfmfmn.png" />
          </a>
          <a href="http://www.randyjap.com/" target="_blank">
            <img className="social-links" style={{width: 60}} src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488599480/portrait_icon_dwxaiv.png" />
          </a>
          <a href="https://www.linkedin.com/in/randyjap" target="_blank">
            <img className="social-links linked-in" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853581/Logo-2C-21px-R_rc35uu.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Greeting;
