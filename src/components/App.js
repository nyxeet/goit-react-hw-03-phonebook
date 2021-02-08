import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Layout from './Layout/Layout'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import ContactsList from './ContactsList/ContactsList'
import Filter from './Filter'

const defaultState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

class App extends React.Component {
    state = {
        contacts: defaultState,
        filter: '',
    }

    addContact = (name, number) => {

        const contact = {
            id: uuidv4(),
            name,
            number,
        }

        const isValidate = this.state.contacts.some(contact => {
            if (contact.name === name) {
                alert(`${name} is already in contacts`)
                return true;
            }
        })

        !isValidate && this.setState(prevState => {
            return { contacts: [...prevState.contacts, contact] }
        }) 
    };
    filterContacts = e => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
    changeFilter = filter => {
        this.setState({ filter: filter });
    };

    removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };


    render() {
        const filteredList = this.filterContacts();
        return (
            <Layout>
                <h1>Phonebook</h1>
                <ContactsEditor addContact={this.addContact} />
                <h2>Contacts</h2>
                <Filter value={this.filter} changeFilter={ this.changeFilter}/>
                <ContactsList tasks={filteredList} onRemove={ this.removeContact }/>
            </Layout>
        )
    }
}

export default App