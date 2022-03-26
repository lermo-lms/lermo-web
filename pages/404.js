import React, { useEffect } from 'react';
import Logo from '@components/atoms/logo';
import PageNotFound from '@components/atoms/pageNotFound';
import Style from './index.style';

const ErrorPage = () => {
  useEffect(() => {
    setTimeout(() => { window.location.href = '/'; }, 3000);
  }, []);

  return (
    <Style>
      <PageNotFound />
    </Style>
  );
};

export default ErrorPage;
