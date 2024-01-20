import Student from './Student.jsx';
import PropTypes from 'prop-types';

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
      <Student></Student>
    </>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
Student.defaultProps = {
  name: 'Guest',
  age: 0,
  isStudent: false,
};
export default App;
