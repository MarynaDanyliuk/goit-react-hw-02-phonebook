import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ name }) => {
  return (
    <ul className={css.contacts_list}>
      <li>{name}</li>
      <li>{name}</li>
      <li>{name}</li>
    </ul>
  );
};

ContactsList.propTypes = {
  name: PropTypes.string,
};
