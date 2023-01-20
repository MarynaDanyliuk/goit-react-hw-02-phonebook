import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

export class Filter extends React.Component {
  state = {
    filter: '',
  };

  handleFilter = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      filter: event.currentTarget.value,
    });

    this.props.onChange(this.state.filter);
  };

  // propDrop() {
  //   this.props(this.state.filter);
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.props.onSubmit(this.state.filter);

  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ filter: '' });
  // };

  render() {
    return (
      <div>
        <label>
          Fined contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            // onChange={() => {
            //   this.handleFilter();
            // }}
            onChange={this.handleFilter}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
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
