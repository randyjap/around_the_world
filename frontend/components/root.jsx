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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

  const setSocket = roomName => {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'ChatChannel',
      channel_name: roomName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        store.dispatch(receiveMessage(data.message));
      }
    });
  }

  const handleSocket = (nextState, replace) => {
    let roomName = nextState.params.roomName;
    store.dispatch(fetchRooms());
    store.dispatch(fetchRoom(roomName));
    if (window.App.channel) {
      window.App.cable.subscriptions.remove(window.App.channel);
    }
    setSocket(roomName);
  }

  return (
    <Provider store={ store }>
      <MuiThemeProvider>
        <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/" component={ App }>
            <IndexRoute component={ GreetingContainer } />
            <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="room" component={ RoomContainer } />
          </Route>
          <Route path="/rooms" component={ Rooms }>
            <Route path=":roomName" component={ RoomContainer } onEnter={ handleSocket.bind(this) }/>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
