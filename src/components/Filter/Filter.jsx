import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    <span>Find contacts by name</span>
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
