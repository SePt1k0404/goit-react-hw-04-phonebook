import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormWrapper,
  FormSubmitBtn,
  FormInputName,
  FormInputNumber,
} from './PhoneBookForm.styled';

export const PhoneBookForm = ({ onChangeInfo }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerChange = (evt, key) => {
    switch (key) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        console.log('Error');
    }
  };

  const handlerSubmit = evt => {
    evt.preventDefault();
    onChangeInfo({
      id: nanoid(),
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormWrapper onSubmit={handlerSubmit}>
        <label>
          Name
          <FormInputName
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={evt => handlerChange(evt, 'name')}
          />
        </label>
        <label>
          Number
          <FormInputNumber
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={evt => handlerChange(evt, 'number')}
          />
        </label>
        <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
      </FormWrapper>
    </>
  );
};
