import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const login = form.elements.login.value;
    console.log(login);
    this.props.onSubmit({ login });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
