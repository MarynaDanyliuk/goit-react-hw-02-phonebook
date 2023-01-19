import React from 'react';
// import { nanoid } from 'nanoid';

// import { Section } from 'components/Section/Section';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';

// const contacts = nanoid();

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;

    console.log(data);
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
    // const { contacts, name } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: `column`,
          marginLeft: 40,
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form
          onSubmit={this.formSubmitHandler}
          // handleChange={this.handleNameChange}
          // handleSubmit={this.handleSubmit}
          name={this.state.name}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactsList
          // name={this.formSubmitHandler}
          contacts={this.formSubmitHandler}
        />
      </div>
    );
  }
}

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
