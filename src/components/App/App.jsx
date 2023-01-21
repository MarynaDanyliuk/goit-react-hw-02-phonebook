import React from 'react';
import { nanoid } from 'nanoid';

// import { Section } from 'components/Section/Section';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formSubmitHandler = ({ name, number }) => {
    // console.log({ name, number });
    const id = nanoid();
    const contactsList = [...this.state.contacts];
    contactsList.push({ id, name, number });

    console.log(contactsList);

    this.setState({
      contacts: contactsList,
    });
  };

  handleNameFilter = event => {
    const filterList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return filterList;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: `column`,
          marginLeft: 40,
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1 className="section_title">Phonebook</h1>
        <Form
          onSubmit={this.formSubmitHandler}
          name={this.state.name}
          number={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleChange} />
        {/* <ContactsList contacts={this.state.contacts} /> */}
        <ContactsList contacts={this.handleNameFilter()} />
      </div>
    );
  }
}

//  <ContactsList name={this.state.name} number={this.state.number} />;
// ____________________________________i
/* <Section title="Phonebook">
          <Form
            options={{
              // handleSubmit: this.onHandleSubmit,
              handleChange: this.onHandleNameChange,
            }}
            // handleChange={this.onHandleNameChange}
            contacs={{
              name: this.state.name,
              id: nameInputId,
            }}
          />
        </Section>

        <Section title="Contacts" children>
          <ContactsList name={this.state.name} />
        </Section> */
// ________________________________________________
// handleNameChange = event => {
//   console.log(event);
//   console.log(event.currentTarget.value);

//   this.setState({
//     name: event.currentTarget.value,
//     contacts: [{ id: contacts, name: event.currentTarget.value }],
//   });
// };

// handleSubmit = event => {
//   event.preventDefault();
//   console.log(this.state);
// };
