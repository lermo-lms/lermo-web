const actions = {
  CREATE_POST: 'CREATE_POST',
  CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
  CREATE_POST_FAIL: 'CREATE_POST_FAIL',

  UPDATE_POST: 'UPDATE_POST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_FAIL: 'UPDATE_POST_FAIL',

  UPLOAD_POST_IMAGE: 'UPLOAD_POST_IMAGE',
  UPLOAD_POST_IMAGE_SUCCESS: 'UPLOAD_POST_IMAGE_SUCCESS',
  UPLOAD_POST_IMAGE_FAIL: 'UPLOAD_POST_IMAGE_FAIL',

  GET_POST: 'GET_POST',
  GET_POST_SUCCESS: 'GET_POST_SUCCESS',
  GET_POST_FAIL: 'GET_POST_FAIL',

  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_FAIL: 'GET_POSTS_FAIL',

  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',

  GET_POST_COMMENTS_REQUEST: 'GET_POST_COMMENTS_REQUEST',
  GET_POST_COMMENTS_SUCCESS: 'GET_POST_COMMENTS_SUCCESS',
  GET_POST_COMMENTS_ERROR: 'GET_POST_COMMENTS_ERROR',
  CLEAN_POST_COMMENTS: 'CLEAN_POST_COMMENTS',

  UPDATE_VIEW: 'UPDATE_VIEW',
  UPDATE_VIEW_SUCCESS: 'UPDATE_VIEW_SUCCESS',
  UPDATE_VIEW_ERROR: 'UPDATE_VIEW_ERROR',

  get_post: (pid) => ({
    type: actions.GET_POST,
    payload: {
      pid,
    },
  }),

  get_posts: () => ({
    type: actions.GET_POSTS,
  }),

  create_post: (status, contentRAW, contentHTML) => ({
    type: actions.CREATE_POST,
    data: {
      status,
      contentRAW,
      contentHTML,
    },
  }),

  update_post: (postId, status, tags, contentRAW, contentHTML) => ({
    type: actions.UPDATE_POST,
    data: {
      postId,
      status,
      tags,
      contentRAW,
      contentHTML,
    },
  }),

  upload_post_image: (id, file) => ({
    type: actions.UPLOAD_POST_IMAGE,
    data: {
      id,
      file,
    },
  }),

  add_comment: (id, comment) => ({
    type: actions.ADD_COMMENT_REQUEST,
    payload: {
      id,
      comment,
    },
  }),

  get_post_comments: (id) => ({
    type: actions.GET_POST_COMMENTS_REQUEST,
    payload: {
      id,
    },
  }),

  clean_post_comments: () => ({
    type: actions.CLEAN_POST_COMMENTS,
  }),

  update_view: (id) => ({
    type: actions.UPDATE_VIEW,
    payload: {
      id,
    },
  }),
};

export default actions;
