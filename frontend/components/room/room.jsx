import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Room extends React.Component{
  constructor(props){
    super(props);
    this.state = { message: "", messages: [] };
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.logChangeInput = this.logChangeInput.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  _handleKeyPress(e){
    if (e.key === 'Enter') {
      this.setState({ message: "" });
      this.postMessage();
    }
  }

  logChangeInput(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  postMessage(){
    this.state.messages.push(this.state.message);
  }

  render(){
    let messages = this.state.messages;
    if (messages.length == 0) {
    } else {
      messages = messages.map(message => {
        return (
          <Card className="message" key={1}>
            <CardHeader
              title="Author"
              subtitle="Posted at xx"
              avatar={<Avatar src="http://www.randyjap.com/images/avatar.jpg" />}
            />
            <CardText>
              {message}
            </CardText>
          </Card>
        );
      })
    }

    return (
      <div className="room">
        <h1>{this.props.routeParams.roomName}</h1>
          <ReactCSSTransitionGroup
            transitionName="message"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {messages}
          </ReactCSSTransitionGroup>
        <TextField
          fullWidth={true}
          floatingLabelText={"Enter message..."}
          className="message-input-field"
          value={this.state.message}
          onChange={this.logChangeInput("message")}
          onKeyPress={this._handleKeyPress}
          multiLine={false}
        />
      </div>
    );
  }
}

export default Room;
