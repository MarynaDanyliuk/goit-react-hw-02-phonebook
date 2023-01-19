import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {
  const { id, name } = contacts;
  return (
    <div>
      <ul>
        {/* {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))} */}
        <li key={id}>{name}</li>
        <li key={id}>{name}</li>
        <li key={id}>{name}</li>
      </ul>
    </div>
  );
};

// ContactsList.propTypes = {
//   name: PropTypes.string,
// };

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
