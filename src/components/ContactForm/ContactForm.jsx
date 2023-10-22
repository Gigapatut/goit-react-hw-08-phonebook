import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectNameContacts } from 'redux/selectors';

  export default function ContactForm() {

    const dispatch = useDispatch();
    const contactsName = useSelector(selectNameContacts);

    const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.target;
      const name = form.elements.name.value;
      const phone = form.elements.phone.value;

      contactsName.includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, phone }));
      form.reset();
    };
    
    return (
    
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form}>
        Name
        <input
          type="text"
          name="name"
          autoComplete='off'
          required
        />
      </label>

      <label className={css.form}>
        Number
        <input
          type="tel"
          name="phone"
          required
        />
      </label>
      <button className={css.add} type="submit">
        Add contact
      </button>
    </form>
  );
};

