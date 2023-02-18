import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ConctactListItem } from 'components/ContactListItem/ContactListItem';
import { nanoid } from 'nanoid';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const { contacts, filterValue } = useSelector(state => ({
        contacts: getContacts(state),
        filterValue: getFilter(state),
    }));

    const handleFilter = contacts =>
        contacts.filter(contact =>
            contact.name
                .toLowerCase()
                .includes(filterValue.toLowerCase().trim())
        );

    return (
        <ul className={css.ulStyle}>
            {handleFilter(contacts).map(({ phone, name, id }) => (
                <ConctactListItem
                    key={nanoid(5)}
                    id={id}
                    name={name}
                    number={phone}
                />
            ))}
        </ul>
    );
};
