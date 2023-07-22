import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from 'hooks/uselocalStorage';

import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  const { storedData, setStoredData } = useLocalStorage('contacts', []);

  const [contacts, setContacts] = useState(storedData());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setStoredData(contacts);
  }, [contacts, setStoredData]);

  const handleFormSubmit = (name, number) => {
    const newContact = {
      id: nanoid(7),
      name,
      number,
    };

    // validation
    for (const contact of contacts) {
      if (contact.name === name) {
        return alert(`${name} is already in contacts.`);
      }
    }

    setContacts(state => [...state, newContact]);
  };

  const handleFilterChange = searchQuery => {
    setFilter(searchQuery.toLowerCase());
  };

  const handleRemoveContact = contactId => {
    const newContacts = contacts.filter(({ id }) => id !== contactId);
    setContacts(newContacts);
  };

  return (
    <div className="wrapper">
      <Section title="Phonebook">
        <ContactForm onFormSubmit={handleFormSubmit} />
      </Section>

      <Section title="Contacts">
        <Filter onFilterChange={handleFilterChange} />
        <ContactList
          contacts={contacts}
          filterQuery={filter}
          onRemoveContact={handleRemoveContact}
        />
      </Section>
    </div>
  );
};
