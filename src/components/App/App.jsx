import React from 'react';
import { nanoid } from 'nanoid';

// import { Section } from 'components/Section/Section';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';

const nameInputId = nanoid();

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    console.log(event);
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    this.props.onSubmit({ ...this.state });
  };

  render() {
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
          handleChange={this.handleNameChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          id={nameInputId}
        />
        <h2>Contacts</h2>
        <ContactsList name={this.state.name} />
      </div>
    );
  }
}

// ____________________________________

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
