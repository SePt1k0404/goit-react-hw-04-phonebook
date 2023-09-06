import { Component } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './Contacts/ContactsFilter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  CONTACTS_KEY = 'contacts';
  componentDidMount() {
    if (localStorage.getItem(this.CONTACTS_KEY) !== null) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem(this.CONTACTS_KEY)),
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem(
      this.CONTACTS_KEY,
      JSON.stringify(this.state.contacts)
    );
  }
  handlerChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  changeInfo = info => {
    if (this.state.contacts.some(el => el.name === info.name)) {
      alert(`${info.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          filter: '',
          contacts: [...prevState.contacts, info],
        };
      });
    }
  };
  deleteContact = evt => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.name !== evt.target.value),
      };
    });
  };
  render() {
    const visibleName = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <h2 style={{ marginLeft: '20px' }}>Phonebook</h2>
        <PhoneBookForm onChangeInfo={this.changeInfo} />
        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
        <ContactsFilter
          filter={this.state.filter}
          handlerChange={this.handlerChange}
        />
        <Contacts contacts={visibleName} deleteContact={this.deleteContact} />
      </>
    );
  }
}
