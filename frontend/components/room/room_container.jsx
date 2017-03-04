import { connect } from 'react-redux';
import Room from './room';
import { postMessage } from '../../actions/message_actions';
import { postRoom } from '../../actions/room_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
  messages: state.currentRoom.messages,
  rooms: state.rooms,
  username: state.session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage(message)),
  postRoom: room => dispatch(postRoom(room)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
