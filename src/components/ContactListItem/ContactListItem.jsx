import PropTypes from 'prop-types';
import { Item, Text } from './ContactListItem.styled';

export const ContactListItem = ({
  userId,
  userName,
  userNumber,
  onDeleteContact,
}) => (
  <Item>
    <Text>
      {userName}: <span>{userNumber}</span>
    </Text>
    <button type="button" onClick={() => onDeleteContact(userId)}>
      Delete
    </button>
  </Item>
);

ContactListItem.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
