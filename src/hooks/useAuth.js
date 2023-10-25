import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const user = useSelector(authSelectors.selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
export default useAuth;
