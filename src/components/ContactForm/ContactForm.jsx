import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export function ContactForm() {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const contactNumberExists = num =>
        contacts.some(contact => contact.phone === num);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const { name, phone } = form.elements;
        const contactName = name.value;
        const contactNumber = phone.value;

        if (!contacts.length || !contactNumberExists(contactNumber)) {
            const newContact = {
                name: contactName,
                phone: contactNumber,
            };
            dispatch(addContact(newContact));
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
                    name="phone"
                    value={contacts.phone}
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
