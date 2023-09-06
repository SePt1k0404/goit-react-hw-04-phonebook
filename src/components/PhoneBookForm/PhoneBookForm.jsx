import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  FormWrapper,
  FormSubmitBtn,
  FormInputName,
  FormInputNumber,
} from './PhoneBookForm.styled';

export class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handlerChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handlerSubmit = evt => {
    evt.preventDefault();
    this.props.onChangeInfo({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <FormWrapper onSubmit={this.handlerSubmit}>
          <label>
            Name
            <FormInputName
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handlerChange}
            />
          </label>
          <label>
            Number
            <FormInputNumber
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handlerChange}
            />
          </label>
          <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
        </FormWrapper>
      </>
    );
  }
}
