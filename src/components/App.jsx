import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const contact = { id: shortid.generate(), ...data };

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList users={contacts} />
      </Container>
    );
  }
}
