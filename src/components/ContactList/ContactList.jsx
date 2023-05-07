import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';
import {List} from './ContactList.styled'

export const ContactList = ({ users, onDeleteContact }) => (
  <List>
    {users.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        userName={name}
        userNumber={number}
        onDelete={() => onDeleteContact(id)}
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
