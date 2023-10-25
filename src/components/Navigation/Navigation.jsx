import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import css from './Navigation.module.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box sx={{ display: { xs: 'flex' } }}>
        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </Button>

        {isLoggedIn && (
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          </Button>
        )}
      </Box>
    </nav>
  );
};
export default Navigation;
