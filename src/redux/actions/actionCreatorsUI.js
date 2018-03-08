import * as actions from './actionNames';

export const uiToast = ({ html, classes }) => ({
  type: actions.UI_TOAST,
  payload: {
    html,
    classes: classes || ''
  }
});