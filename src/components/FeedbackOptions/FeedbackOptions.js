import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button
          className={s.btn}
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
