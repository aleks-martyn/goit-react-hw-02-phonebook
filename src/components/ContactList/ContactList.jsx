import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';
import {List} from './ContactList.styled'

export const ContactList = ({ users, onDeleteContact }) => (
  <List>
    {users.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        userId={id}
        userName={name}
        userNumber={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
