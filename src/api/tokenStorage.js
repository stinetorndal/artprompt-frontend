// Navnet, tokenet gemmes under i localStorage
const TOKEN_KEY = "jwtToken";

// Gemmer tokenet i browserens localStorage
function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

// Henter tokenet fra localStorage. Giver null, hvis der ikke er noget
function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// Sletter tokenet. Bruges, når man logger ud
function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

//Er bruger logget ind? Ja, hvis der ligger et token
function isLoggedIn() {
  return getToken() != null;
}

export { setToken, getToken, removeToken, isLoggedIn };
