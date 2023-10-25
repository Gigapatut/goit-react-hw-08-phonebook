import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import useAuth from 'hooks/useAuth';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{ display: { xs: 'flex', marginLeft: 'auto', alignItems: 'center' } }}
    >
      <FaceTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 4,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: '#fde910',
          textDecoration: 'none',
          ml: 2,
        }}
      >
        Welcome, {user.name}!
      </Typography>
      <Button
        sx={{ my: 2, color: 'white', display: 'block' }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
