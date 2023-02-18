import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/addRemoveContactsSlice';
import { getStatusFilter } from 'redux/selectors';

export const Filter = () => {
    const filter = useSelector(getStatusFilter);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(filterContact(e.target.value));
    };

    return (
        <div>
            <label>Find contacts by Name </label>
            <input
                className={css.filterName}
                type="text"
                name="filter"
                placeholder="Enter filter"
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};
