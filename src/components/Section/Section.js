import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';

function Section({ title, children }) {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};

export default Section;
