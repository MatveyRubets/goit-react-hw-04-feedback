import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(name => {
        return (
          <button key={name} name={name} onClick={() => onLeaveFeedback(name)}>
            {name}
          </button>
        );
      })}
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
