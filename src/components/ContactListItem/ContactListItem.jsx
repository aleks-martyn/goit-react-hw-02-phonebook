import PropTypes from 'prop-types';
import { Item, Text, Marker } from './ContactListItem.styled';

export const ContactListItem = ({
  userName,
  userNumber,
  onDelete,
}) => (
  <Item>
    <Marker></Marker>
    <Text>
      {userName}: <span>{userNumber}</span>
    </Text>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </Item>
);

ContactListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
