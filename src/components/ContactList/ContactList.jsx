import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConctactListItem } from 'components/ContactListItem/ContactListItem';
import { nanoid } from 'nanoid';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
    const dispatch = useDispatch();
    const { contacts, filterValue } = useSelector(state => ({
        contacts: getContacts(state),
        filterValue: getFilter(state),
    }));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

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
