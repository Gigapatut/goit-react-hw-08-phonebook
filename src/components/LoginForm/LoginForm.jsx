import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        Enter data for login
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
            label="Email"
            name="email"
            size="small"
            variant="standard"
            type="email"
          />

          <TextField
            name="password"
            label="Password"
            size="small"
            variant="standard"
            type="password"
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ my: 2, color: 'white', display: 'block', ml: 6 }}
          >
            Log In
          </Button>
        </Box>
      </form>
    </>
  );
};
