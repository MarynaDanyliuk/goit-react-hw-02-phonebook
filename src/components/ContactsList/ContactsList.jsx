import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {
  // console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
            {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactsList.propTypes = {
//   name: PropTypes.string,
// };
