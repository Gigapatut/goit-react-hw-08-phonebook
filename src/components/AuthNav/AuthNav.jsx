import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AuthNav = () => {
  return (
    <Box sx={{ display: { xs: 'flex', marginLeft: 'auto' } }}>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </Button>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </Button>
    </Box>
  );
};
export default AuthNav;
