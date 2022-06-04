import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <>
      <h1 className={s.title}>Statistics</h1>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total: {total()}</p>
      <p className={s.text}>Positive feedback: {percentage()} %</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  percentage: PropTypes.func.isRequired,
};

export default Statistics;
