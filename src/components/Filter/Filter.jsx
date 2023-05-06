import PropTypes from 'prop-types';
import { FilterLabel, Text } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    <Text>Find contacts by name</Text>
    <input type="text" value={value} onChange={onChange} />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
