const actions = {
  GET_CATEGORIES_REQUEST: 'auth/GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'auth/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'auth/GET_CATEGORIES_ERROR',

  get_categories: () => ({
    type: actions.GET_CATEGORIES_REQUEST,
  }),
};

export default actions;
