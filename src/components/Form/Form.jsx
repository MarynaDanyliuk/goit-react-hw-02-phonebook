import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export const Form = ({ name, id, handleChange, handleSubmit }) => {
  return (
    <div>
      <form className={css.form}>
        <label htmlFor={id} onSubmit={handleSubmit}>
          Name
          <input
            type="text"
            name={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contacts</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  name: PropTypes.string,
};
