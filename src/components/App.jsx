import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const contact = { id: shortid.generate(), ...data };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList users={contacts} />
      </Container>
    );
  }
}
