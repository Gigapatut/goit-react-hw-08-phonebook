import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contacts/operations';

import { selectFilteredContacts } from 'redux/contacts/selectors';

import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          display: { xs: 'none', md: 'flex' },
          mt: 4,
          mb: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Contacts list
      </Typography>

      <ul>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => (
            <li className={css.item}
              key={id}
              id={id}
              name={name}
              number={number}
            >
              <Box
                sx={{
                  display: {
                    xs: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    justifyContent: 'flex-start',
                  },
                }}
              >
                <Typography>{name}:</Typography>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: 'flex',
                    alignItems: 'center',
                    gap: 80,
                    justifyContent: 'space-between',
                  },
                }}
              >
                <Typography>{number}</Typography>
                <DeleteIcon className={css.DeleteIcon}
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                />
              </Box>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
