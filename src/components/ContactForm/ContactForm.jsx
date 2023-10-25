
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectNameContacts } from 'redux/contacts/selectors';

//-------------------------------------------
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
//---------------------------------------------

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactsName = useSelector(selectNameContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.phone.value;

    contactsName.includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          display: { xs: 'none', md: 'flex' },
          mt: 3,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Enter a new contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: { xs: 'flex', alignItems: 'center', gap: 20 } }}>
          <div>
            <TextField
              label="Name"
              type="text"
              name="name"
              size="small"
              variant="standard"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <TextField
              label="Number"
              type="tel"
              name="phone"
              size="small"
              variant="standard"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              sx={{ my: 2, color: 'white', display: 'block', ml: 6 }}
            >
              Add contact
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};
