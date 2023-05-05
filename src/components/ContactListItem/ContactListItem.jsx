import PropTypes from 'prop-types';

export const ContactListItem = ({
  userId,
  userName,
  userNumber,
  onDeleteContact,
}) => (
  <li>
    <p>
      {userName}: <span>{userNumber}</span>
    </p>
    <button type="button" onClick={() => onDeleteContact(userId)}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
