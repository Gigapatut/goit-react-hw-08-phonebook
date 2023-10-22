import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {  
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        onChange={onChange}
        className={css.inputText}
        autoComplete='off'
      />
    </label>
  );
};
export default Filter;
