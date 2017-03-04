import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        modalOpen: true,
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.redirect = this.redirect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
    this.props.clearSessionErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user})
      .then(() => this.redirect('/rooms/General')
    );
  }

  updateProperty(property){
    return e => this.setState({ [property]: e.target.value });
  }

  closeModal() {
    this.props.clearSessionErrors();
    this.setState({ modalOpen: false });
    this.redirect('/');
  }

  openModal() {
    this.redirect('/');
    this.setState({ modalOpen: true });
  }

  demoLogin() {
    const username = "Guest";
    const password = "password";
    let counter = 0;
    const typer = () => {
      counter++;
      this.setState({ username: username.slice(0, counter) });
      if (counter === username.length) {
        this.setState({ password });
        clearInterval(animation);
        this.props.login({user: {username, password} }).then(() => this.redirect('/rooms/General'));
      }
    };
    const animation = setInterval(typer, 70);
  }

  render(){
    const buttonText = this.props.formType === "login" ? "Login" : "Sign Up";
    return(
      <div className="main">
        <div id='greeting'>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            className="modal-session"
            overlayClassName="overlayModal"
            contentLabel="Modal"
            transitionName="modal-anim">
            <div>
              <h1 className="entrance"><div className="square-logo"></div></h1>
              <form onSubmit={this.handleSubmit}>
                <hr/>
                <div className='entrance flex'>
                  <div><FlatButton label="Login" onClick={() => this.redirect('login')} /></div>
                  <div><FlatButton label="Signup" onClick={() => this.redirect('signup')} /></div>
                </div>
                <hr/>
                <TextField style={{width: 200}} autoFocus hintText="Enter Username" floatingLabelText="Username" value={this.state.username} onChange={this.updateProperty('username')} required /><br />
                <TextField style={{width: 200}} errorText={this.props.errors.join(" and ")} hintText="Enter Password" floatingLabelText="Password" type="password" value={this.state.password} onChange={this.updateProperty('password')} required /><br />
                <div className="entrance flex">
                  <div><button className='entrance' value="Sign In" onClick={this.handleSubmit}>{buttonText}</button></div>
                  <div><button className='demo' value="DEMO" onClick={this.demoLogin}>DEMO</button></div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default SessionForm;
