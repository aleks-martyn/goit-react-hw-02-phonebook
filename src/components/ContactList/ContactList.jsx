import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';

export const ContactList = ({ users, onDeleteContact }) => (
  <ul>
    {users.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        userId={id}
        userName={name}
        userNumber={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
