import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import RoomContainer from './room/room_container';
import Rooms from './room/rooms';
import { fetchRooms, fetchRoom } from '../actions/room_actions';
import { receiveMessage } from '../actions/message_actions';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const resetSocket = channelName => {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'ChatChannel',
      channel_name: roomName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        this.props.store.dispatch(receiveMessage(data.message));
      }
    });
  }

  const handleSocket = (nextState, replace) => {
    let channelName = nextState.params.channelName;
    this.props.store.dispatch(requestAllRooms());
    this.props.store.dispatch(fetchChannel(channelName));
    if (window.App.channel) {
      this.removeSocket();
    }
    this.resetSocket(channelName);
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App }>
          <IndexRoute component={ GreetingContainer } />
          <Route path="login" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path="signup" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path="room" component={ RoomContainer } />
        </Route>
        <Route path="/rooms" component={ Rooms }>
          <Route path=":roomName" component={ Room } onEnter={ this.handleSocket.bind(this) }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
