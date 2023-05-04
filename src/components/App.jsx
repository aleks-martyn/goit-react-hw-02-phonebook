import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <ContactForm />
      </Container>
    );
  }
}
