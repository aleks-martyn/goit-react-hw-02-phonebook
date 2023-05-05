import PropTypes from 'prop-types';
import { Item } from './ContactListItem.styled';

export const ContactListItem = ({
  userId,
  userName,
  userNumber,
  onDeleteContact,
}) => (
  <Item>
    <p>
      {userName}: <span>{userNumber}</span>
    </p>
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
