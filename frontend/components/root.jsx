import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import RoomContainer from './room/room_container';
import Rooms from './room/rooms';
import { getRooms, receiveRoom } from '../actions/room_actions';
import { getMessages, receiveMessage } from '../actions/message_actions';
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
      replace('/rooms/General');
    }
  };

  const _redirectToGeneral = (nextState, replace) => {
    replace('/rooms/General');
  };

  const setMessageSocket = room => {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'RoomChannel',
      room_name: room
    }, {
      received: data => {
        store.dispatch(receiveMessage(data));
      }
    });
  };

  const setRoomSocket = () => {
    window.App.roomNames = window.App.cable.subscriptions.create({
      channel: 'RoomsChannel',
      room_name: "AllRooms"
    }, {
      received: data => {
        store.dispatch(receiveRoom(data));
        console.log("received something");
        console.log(data);
      }
    });
  };

  const handleSocket = (nextState, replace) => {
    let room = nextState.params.room;
    store.dispatch(getMessages({room: room}));
    if (window.App.channel) {
      window.App.cable.subscriptions.remove(window.App.channel);
    }
    setMessageSocket(room);

    //Get all room names
    store.dispatch(getRooms());
    if (window.App.roomNames) {
      window.App.cable.subscriptions.remove(window.App.roomNames);
    }
    setRoomSocket();
  };

  return (
    <Provider store={ store }>
      <MuiThemeProvider>
        <Router history={ hashHistory } >
          <Route path="/" component={ App } onEnter={ _redirectIfLoggedIn }>
            <IndexRoute component={ GreetingContainer } />
            <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="room" component={ RoomContainer } />
          </Route>
          <Route path="/rooms" component={ Rooms } onEnter={ _ensureLoggedIn }>
            <Route path=":room" component={ RoomContainer } onEnter={ handleSocket.bind(this) }/>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
