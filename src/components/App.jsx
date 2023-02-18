import React from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 25,
                color: '#010101',
                fontFamily: 'Georgia',
            }}
        >
            <Section title="Phonebook">
                <ContactForm />
            </Section>

            <Section title="Contacts">
                <Filter />
                <ContactList />
            </Section>
        </div>
    );
}
