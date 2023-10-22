import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  
  const filteredContacts = useSelector(selectFilteredContacts); 
  const dispatch = useDispatch();
  
  return (
    <ul>
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => (
          <li
            className={css.contact}
            key={id}
            id={id}
            name={name}
            phone={phone}
          >
            {name}: {phone}
            <button
              className={css.delete}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;

