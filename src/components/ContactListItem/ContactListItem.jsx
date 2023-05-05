import PropTypes from 'prop-types';

export const ContactListItem = ({ userName, userNumber }) => (
  <li>
    <p>
      {userName}: <span>{userNumber}</span>
    </p>
    <button type="button">Delete</button>
  </li>
);

ContactListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
};
