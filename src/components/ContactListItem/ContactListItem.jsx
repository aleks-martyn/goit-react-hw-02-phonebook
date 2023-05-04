import PropTypes from 'prop-types';

export const ContactListItem = ({ userName, userNumber }) => (
  <li>
    <p>
      {userName}: <span>{userNumber}</span>
    </p>
  </li>
);

ContactListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
};
