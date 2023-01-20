import React from 'react';
// import { nanoid } from 'nanoid';

// import { Section } from 'components/Section/Section';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

// const contacts = nanoid();

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = data;
    this.setState({
      contacts: [
        {
          id: contacts[0].id,
          name: contacts[0].name,
          number: contacts[0].number,
        },
      ],
      filter: '',
      // name: name,
      // number: number,
    });
  };

  handleNameFilter = data => {
    // const { filter, contacts } = this.state;
    // console.log(data);
    // const { filter } = data;
    this.setState({ filter: data });

    this.setState(({ filter, contacts }) => ({
      contacts: contacts.map(contact =>
        contact.name === filter
          ? {
              // ...contacts[0],
              name: filter,
            }
          : contact
      ),
    }));
    // if (filter === contacts.name) {
    //   return {
    //     ...contacts[0],
    //     name: filter,
    //   };
    // }
  };

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
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleNameFilter} />
        <ContactsList contacts={this.state.contacts} />
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
