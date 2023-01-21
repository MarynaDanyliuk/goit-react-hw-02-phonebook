import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, handleDelete }) => {
  // const{id, name,}=contacts
  // console.log(contacts);
  return (
    <div>
      <ul className={css[`contact-list`]}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button id={contact.id} type="button" onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  name: PropTypes.string,
};
