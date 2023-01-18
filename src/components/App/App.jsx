import React from 'react';

import { Section } from 'components/Section/Section';
import { ContactsList } from 'components/ContactsList/ContactsList';

export class App extends React.Component {
  state = {
    contacts: [],
    name: 'Mary',
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
        <Section title="Phonebook">
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Section>

        <Section title="Contacts" children>
          <ContactsList name={this.state.name} />
        </Section>
      </div>
    );
  }
}
