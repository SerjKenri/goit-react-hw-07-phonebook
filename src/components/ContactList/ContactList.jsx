import css from './ContactList.module.css';
import { ConctactListItem } from 'components/ContactListItem/ContactListItem';
import { nanoid } from 'nanoid';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getStatusFilter);

    const handleFilter = () => {
        const filterContactsList = contacts.filter(contact => {
            return contact.name
                .toLowerCase()
                .includes(filterValue.toLowerCase().trim());
        });
        return filterContactsList;
    };

    return (
        <ul className={css.ulStyle}>
            {handleFilter().map(({ number, name, id }) => (
                <ConctactListItem
                    key={nanoid(5)}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    );
};
