import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

export class Filter extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
      contacts: [
        {
          id: this.contactId,
          name: this.state.name,
          number: value,
        },
      ],
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  render() {
    return (
      <div>
        <label>
          Fined contacts by name
          <input
            type="text"
            name="name"
            // value={contacts}
            // onChange={handleNameFilter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
    );
  }
}

// export const Filter = ({ contacts, handleNameFilter }) => {
//   // const { name } = contacts;
//   return (

//   );
// };
