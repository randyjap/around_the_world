import { connect } from 'react-redux';
import Room from './room';
import { postMessage } from '../../actions/message_actions';

const mapStateToProps = state => ({
  messages: state.currentRoom.messages,
  currentRoom: state.currentRoom.room
});

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
