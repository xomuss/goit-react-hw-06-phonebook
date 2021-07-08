import React, { Component } from 'react';
import ContactsList from './Components/ContactsList';
import Form from './Components/Form';
import Filter from './Components/Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    // contacts: [],
    // filter: '',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // formSubmitHandler = ({ name, number }) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: shortid.generate(),
  //   };

  //   if (this.state.contacts.find(el => el.name === contact.name)) {
  //     alert('This contact already exist');
  //     return;
  //   }

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  changeFilter = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize),
    );
  };

  render() {
    // const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phone Book</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <Filter onChange={this.changeFilter} value={this.state.filter} /> */}
        {/* <ContactsList
          contactsData={visibleContacts}
          onDeleteContact={this.deleteContact}
        /> */}
      </>
    );
  }
}

export default App;
