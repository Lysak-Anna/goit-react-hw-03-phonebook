import './App.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Title } from 'components/Title/Title';
import Wrapper from 'components/Wrapper/Wrapper';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Alexa Nuland', number: '581-44-12' },
      { id: 'id-6', name: 'Peter Sill', number: '890-01-14' },
      { id: 'id-7', name: 'Liza Shirow', number: '397-55-66' },
      { id: 'id-8', name: 'John Smith', number: '566-09-11' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  checkName = (array, name) => {
    return array.some(item => name.toLowerCase() === item.name.toLowerCase());
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    this.checkName(this.state.contacts, name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { name, number, id: nanoid() }],
        }));
    e.currentTarget.reset();
  };

  onChangeHandler = e => {
    this.setState({ filter: e.target.value });
  };
  deleteItemHandler = e => {
    const id = e.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="App">
        <Wrapper>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.onSubmitHandler} />

          <Title>Contacts</Title>
          <Filter onChange={this.onChangeHandler} />
          <ContactList
            filter={filter}
            contacts={contacts}
            deleteItemHandler={this.deleteItemHandler}
          />
        </Wrapper>
      </div>
    );
  }
}

export default App;
