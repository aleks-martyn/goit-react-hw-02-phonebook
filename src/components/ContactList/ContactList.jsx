import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';

export const ContactList = ({ users }) => (
  <ul>
    {users.map(({ id, name, number }) => (
      <ContactListItem key={id} userName={name} userNumber={number} />
    ))}
  </ul>
);

ContactList.propTypes = {
  id: PropTypes.string,
};
