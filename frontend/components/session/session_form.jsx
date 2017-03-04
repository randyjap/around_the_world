import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        modalOpen: true,
        username: "",
        password: ""
    };
    this.updateProperty = this.updateProperty.bind(this);
    this.redirect = this.redirect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
    this.props.clearSessionErrors();
  }

  signup(e){
    e.preventDefault();
    const user = this.state;
    this.props.signup({user})
      .then(() => this.redirect('/rooms/General')
    );
  }

  login(e){
    e.preventDefault();
    const user = this.state;
    this.props.login({user})
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
    return(
      <div className="main-splash">
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
                <TextField style={{width: 215}} autoFocus hintText="Enter Username" floatingLabelText="Username" value={this.state.username} onChange={this.updateProperty('username')} required /><br />
                <TextField style={{width: 215, marginBottom: 50}} errorText={this.props.errors.join(" and ")} hintText="Enter Password" floatingLabelText="Password" type="password" value={this.state.password} onChange={this.updateProperty('password')} required /><br />
                <div className="entrance flex">
                  <div><FlatButton label="Login" onClick={this.login} /></div>
                  <div><FlatButton label="Signup" onClick={this.signup} /></div>
                </div>
                <div><RaisedButton label="Demo" onClick={this.demoLogin} secondary={true} style={{margin: 12, width: 200}} /></div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default SessionForm;
