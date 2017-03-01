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
import TimeAgo from 'react-timeago';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Room extends React.Component{
  constructor(props){
    super(props);
    this.state = { body: "", messages: [] };
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.logChangeInput = this.logChangeInput.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  componentDidUpdate(nextState) {
    if (nextState.messages) {
      let after = Object.keys(nextState.messages).length;
      let before = Object.keys(this.props.messages).length;
      if (after !== before) {
        this.scrollToBottom();
      }
    }
  }

  scrollToBottom() {
    const height = this.refs.messages.scrollHeight;
    this.refs.messages.scrollTop = height;
  }

  _handleKeyPress(e){
    if (e.key === 'Enter') {
      this.setState({ body: "" });
      this.postMessage();
    }
  }

  logChangeInput(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  postMessage(){
    this.props.postMessage(
      {
        body: this.state.body,
        room: this.props.routeParams.room
      }
    );
  }

  render(){
    let messages = this.props.messages;
    if (messages === null) {
    } else {
      messages = Object.keys(messages).map(key => messages[key]);
      messages = messages.map(message => {
        return (
          <Card className="message" key={message.id}>
            <CardHeader
              title={message.author}
              subtitle={<TimeAgo date={message.created_at} />}
              avatar={<Avatar src="http://www.randyjap.com/images/avatar.jpg" />}
            />
            <CardText>
              {message.body}
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
            <div className="messages" ref="messages">
              {messages}
            </div>
          </ReactCSSTransitionGroup>
        <TextField
          fullWidth={true}
          floatingLabelText={"Enter message..."}
          className="message-input-field"
          value={this.state.body}
          onChange={this.logChangeInput("body")}
          onKeyPress={this._handleKeyPress}
          multiLine={false}
        />
      </div>
    );
  }
}

export default Room;
