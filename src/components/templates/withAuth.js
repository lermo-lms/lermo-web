import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import LoadingPage from '@components/atoms/loadingPage';
import ReactGA from 'react-ga';

import authActions from '@redux/auth/actions';

const { fetch_profile, init_token } = authActions;

ReactGA.initialize('UA-211619690-1', {
  debug: false,
  gaOptions: { cookieDomain: 'auto' },
});

const withAuth = (Template, Page) => {
  const Component = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { pathname } = router;

    // const guestRoute = ['/content', '/profile/[pid]', '/watch', '/live/[pid]'];
    const authenRoute = ['/signin', '/signup'];
    const privateRoute = [];

    const { token, profile, isChecked } = useSelector((state) => ({
      token: state.Auth.get('token'),
      profile: state.Auth.get('profile'),
      isChecked: state.Auth.get('isCheckedTokenFromStorage'),
    }));
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
      if (!isChecked && !token) {
        dispatch(init_token());
      }
    }, []);

    useEffect(() => {
      if (!isChecked) return;

      if (token && !profile) {
        dispatch(fetch_profile());
      }
    }, [isChecked, profile]);

    useEffect(() => {
      if (!isChecked) return;
      if (authenRoute.includes(pathname) && profile) {
        router.push('/');
      } else if (privateRoute.includes(pathname) && !profile) {
        router.push('/signin');
      } else {
        setIsLoading(false);
      }
    }, [isChecked, pathname, profile]);

    if (isLoading) return <LoadingPage />;

    return (
      <Template>
        <Page />
      </Template>
    );
  };

  return Component;
};

export default withAuth;
