import React from 'react';

import { Section } from 'components/Section/Section';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  // onHandleChange = event => {
  //   this.setState({ name: event.target.value });
  // };
  // onHandleSubmit = event => {
  //   event.preventDefault();
  //   console.log(`Signed up as: ${this.state.name}`);

  //   this.props.onSubmit({ ...this.state });
  // };

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
        <Section title="Phonebook">
          <Form handleSubmit={this.onHandleSubmit} />
        </Section>

        <Section title="Contacts" children>
          <ContactsList name={this.state.name} />
        </Section>
      </div>
    );
  }
}
