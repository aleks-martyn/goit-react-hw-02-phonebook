import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <ContactForm onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}
