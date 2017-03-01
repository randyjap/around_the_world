import { connect } from 'react-redux';
import Room from './room';
import { postMessage } from '../../actions/message_actions';
import { postRoom } from '../../actions/room_actions';

const mapStateToProps = state => ({
  messages: state.currentRoom.messages,
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage(message)),
  postRoom: room => dispatch(postRoom(room))
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
