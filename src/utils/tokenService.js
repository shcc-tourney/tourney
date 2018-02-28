function setToken(token) {
  if (token) {
    sessionStorage.setItem('token', token);
  } else {
    sessionStorage.removeItem('token');
  }
}

function getToken() {
  var token = sessionStorage.getItem('token');
  if (token) {
    var payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp && payload.exp < Date.now() / 1000) {
      sessionStorage.removeItem('token');
      token = null;
    }
  }
  return token;
}

function getUserFromToken() {
  var token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function removeToken() {
  sessionStorage.removeItem('token');
}

export default {
  setToken,
  getToken,
  removeToken,
  getUserFromToken
};
