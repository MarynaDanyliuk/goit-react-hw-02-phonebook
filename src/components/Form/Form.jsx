import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

// const contacts = nanoid();

export class Form extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  contactId = nanoid();

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event);
    // console.log(event.currentTarget.value);
    // const contactId = nanoid();

    this.setState({
      [name]: value,
      // name: event.currentTarget.value,
      contacts: [{ id: this.contactId, [name]: value }],
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    // console.log(this.state);

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleNameChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contacts</button>
        </form>
      </div>
    );
  }
}

// _______________

// htmlFor={contacts.id}

// export const Form = ({ name, contacts, handleChange, handleSubmit }) => {
// return (
//   <div>
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label htmlFor={contacts.id}>
//         Name
//         <input
//           type="text"
//           name={name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <button type="submit">Add contacts</button>
//     </form>
//   </div>
// );
// };

Form.propTypes = {
  name: PropTypes.string,
};
