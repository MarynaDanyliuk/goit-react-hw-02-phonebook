import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ name, contacts }) => {
  return (
    <ul className={css.contacts_list}>
      {/* {contacts.map(contact => (
        <li key={contact}>{ name}</li>
      ))} */}
      <li key={contacts.id}>{name}</li>
      <li key={contacts.id}>{name}</li>
      <li key={contacts.id}>{name}</li>
    </ul>
  );
};

ContactsList.propTypes = {
  name: PropTypes.string,
};

//  <ul className={css['stat-list']}>
//    {stats.map(stat => (
//      <li key={stat.id} className={css.item}>
//        <span className={css.label}>{stat.label}</span>
//        <span className={css.percentage}>
//          {stat.percentage}
//          {`%`}
//        </span>
//      </li>
//    ))}
//  </ul>;
