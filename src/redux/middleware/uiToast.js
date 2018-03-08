import * as actions from '../actions/actionNames';

const uiToastMiddleware = () => next => action => {
  if (action.type !== actions.UI_TOAST) {
    return next(action);
  }
  const { html, classes } = action.payload;
  window.M.toast({ html, classes });
};

export default uiToastMiddleware;