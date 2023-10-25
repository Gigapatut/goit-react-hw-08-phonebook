import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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
          ml: 10,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Enter data for registration
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box
          sx={{
            display: {
              xs: 'flex',
              alignItems: 'center',
              gap: 20,
              justifyContent: 'center',
            },
          }}
        >
          <TextField
            label="Username"
            size="small"
            variant="standard"
            type="text"
            name="name"
          />

          <TextField
            label="Email"
            size="small"
            variant="standard"
            type="email"
            name="email"
          />

          <TextField
            label="Password"
            size="small"
            variant="standard"
            type="password"
            name="password"
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ my: 2, color: 'white', display: 'block', ml: 6 }}
          >
            Register
          </Button>
        </Box>
      </form>
    </>
  );
};

export default RegisterForm;
