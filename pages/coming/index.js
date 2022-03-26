import Head from 'next/head';
import Image from 'next/image';

import { UserSideMenuTemplate } from '@components/templates/user';
import withAuth from '@components/templates/withAuth';

import Style from './style';

const ComingPage = () => {
  return (
    <Style>
      <Head>
        <title>Lermo - coming soon</title>
      </Head>
      <div className="user-container container" style={{ marginTop: 80 }}>
        <div className="user-container container">
          <Image src="/images/coming-soon.svg" width="440px" height="614px" />
        </div>
      </div>
    </Style>
  );
};

export default withAuth(UserSideMenuTemplate, ComingPage);
