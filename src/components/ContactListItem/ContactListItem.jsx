import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/addRemoveContactsSlice';

export const ConctactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const handleDelete = id => dispatch(removeContact(id));

    return (
        <li className={css.liStyle}>
            {name}: {number}
            <button
                type="button"
                className={css.contactBtn}
                onClick={() => handleDelete(id)}
            >
                Delete
            </button>
        </li>
    );
};

ConctactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
