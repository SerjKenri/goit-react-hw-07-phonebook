import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(setFilter(e.target.value));
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
