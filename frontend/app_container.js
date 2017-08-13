import { connect } from 'react-redux';
import App from './app';
import { fetchCurrentUser } from './actions/userActions';

// const mapStateToProps = ({ session }) => (
//   {
//     session,
//   }
// );

const mapDispatchToProps = dispatch => (
  {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  }
);

export default connect(mapDispatchToProps)(App);
