import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMain from '@components/organisms/headerMain';
import ReadContent from '@components/organisms/readContent';
import UserTemplate from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import postAPI from '@redux/post/api';
import Head from 'next/head';

import postActions from '@redux/post/actions';
import authActions from '@redux/auth/actions';
import ReactGA from 'react-ga';

import Style from './style';

const {
  get_post_comments, add_comment, update_view, clean_post_comments,
} = postActions;

const { fetch_profile, init_token } = authActions;

ReactGA.initialize('UA-211619690-1', {
  debug: false,
  gaOptions: { cookieDomain: 'auto' },
});

const Read = ({ post }) => {
  const { id } = post;
  const dispatch = useDispatch();

  const {
    comments, token, profile, isChecked,
  } = useSelector((state) => ({
    comments: state.Post.get('comments'),
    token: state.Auth.get('token'),
    profile: state.Auth.get('profile'),
    isChecked: state.Auth.get('isCheckedTokenFromStorage'),
  }));

  const onEnterNewComment = (value) => {
    dispatch(add_comment(id, value));
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    if (!isChecked && !token) {
      dispatch(init_token());
    }

    dispatch(get_post_comments(id));

    setTimeout(() => {
      dispatch(update_view(id));
    }, 10000);

    return () => {
      dispatch(clean_post_comments());
    };
  }, []);

  useEffect(() => {
    if (!isChecked) return;

    if (token && !profile) {
      dispatch(fetch_profile());
    }
  }, [isChecked, profile]);

  return (
    <UserTemplate>
      <Style>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title> {post.title} </title>
          <meta property="og:type" content={post.postType} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={post.thumbnail} />
        </Head>
        <HeaderMain />

        <div className="container">
          <ReadContent post={post} onEnterNewComment={onEnterNewComment} comments={comments} />
        </div>

      </Style>
    </UserTemplate>
  );
};

export async function getServerSideProps({ query }) {
  const { p } = query;
  const api = await postAPI.getPost(p);

  if (!api.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: api.data },
  };
}

export default Read;
