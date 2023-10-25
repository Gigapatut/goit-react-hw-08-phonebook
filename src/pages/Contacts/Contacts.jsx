import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './Contacts.module.css';

import { ProgressBar } from 'react-loader-spinner';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ContactForm />

      <Filter />
      {error && <p>{error}</p>}

      {isLoading && !error && (
        <b>
          <ProgressBar
            height="80"
            width="380"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="black"
            barColor="grey"
          />
        </b>
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
