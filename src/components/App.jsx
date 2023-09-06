import { useState } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './Contacts/ContactsFilter';
import { useEffect } from 'react';

export const App = () => {
  const CONTACTS_KEY = 'contacts';
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem(CONTACTS_KEY) !== null) {
      setContacts(JSON.parse(localStorage.getItem(CONTACTS_KEY)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handlerChange = evt => {
    setFilter(evt.target.value);
  };

  const changeInfo = info => {
    if (contacts.some(el => el.name === info.name)) {
      alert(`${info.name} is already in contacts.`);
    } else {
      setContacts(prevState => [...prevState, info]);
    }
  };

  const deleteContact = evt => {
    setContacts(prevState =>
      prevState.filter(el => el.name !== evt.target.value)
    );
  };

  const visibleName = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h2 style={{ marginLeft: '20px' }}>Phonebook</h2>
      <PhoneBookForm onChangeInfo={changeInfo} />
      <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
      <ContactsFilter filter={filter} handlerChange={handlerChange} />
      <Contacts contacts={visibleName} deleteContact={deleteContact} />
    </>
  );
};
