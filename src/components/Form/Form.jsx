import React, { Component } from 'react';
import { FormStyle, InputLabel, FormInput, FormButton } from './Form.styled';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handelOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <FormStyle onSubmit={this.handelOnSubmit}>
        <InputLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handelInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputLabel>
        <InputLabel>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handelInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormStyle>
    );
  }
}
