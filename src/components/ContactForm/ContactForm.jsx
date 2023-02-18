import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/addRemoveContactsSlice';

export function ContactForm() {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const { name, number } = form.elements;
        const contactName = name.value;
        const contactNumber = number.value;

        if (
            !contacts.length ||
            !contacts.some(contact => contact.number === contactNumber)
        ) {
            const newContact = {
                id: nanoid(5),
                name: contactName,
                number: contactNumber,
            };
            dispatch(addNewContact(newContact));
            form.reset();
        } else {
            alert(`${contactName} is already in contacts`);
        }
    };

    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={contacts.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter name"
                    className={css.formName}
                />

                <label>Number</label>
                <input
                    type="tel"
                    name="number"
                    value={contacts.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter number"
                    className={css.formNumber}
                />

                <button type="submit" className={css.contactBtn}>
                    Add contact
                </button>
            </form>
        </>
    );
}
