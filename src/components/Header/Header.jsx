import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';

import * as React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <AppBar position="static">      
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
