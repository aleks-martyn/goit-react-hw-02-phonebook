import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    <span>Find contacts by name</span>
    <input type="text" value={value} onChange={onChange} />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
