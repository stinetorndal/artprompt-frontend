import { BASE_URL } from "./config";
import { setToken, removeToken, isLoggedIn } from "./tokenStorage";
import { makeOptions, handleHttpErrors } from "./httpHelpers";

const LOGIN_ENDPOINT = "/auth/login";
const REGISTER_ENDPOINT = "/auth/register";

// Logger ind med email og password, og gemmer tokenet fra backend
async function login(email, password) {
  const options = makeOptions("POST", false, {
    email: email,
    password: password,
  });
  const res = await fetch(BASE_URL + LOGIN_ENDPOINT, options);
  const data = await handleHttpErrors(res);
  setToken(data.token);
  return data;
}

// Opretter en ny bruger
async function register(email, password) {
  const options = makeOptions("POST", false, {
    email: email,
    password: password,
  });
  const res = await fetch(BASE_URL + REGISTER_ENDPOINT, options);
  return handleHttpErrors(res);
}

// Logger ud ved at slette tokenet. Backend skal ikke involveres
function logout() {
  removeToken();
}

// Kalder et endpoint, der kræver login, med tokenet i headeren.
// endpoint: fx "/notes/user/1"
async function fetchData(endpoint, method = "GET", body = null) {
  const options = makeOptions(method, true, body);
  const res = await fetch(BASE_URL + endpoint, options);
  return handleHttpErrors(res);
}

// Samler funktionerne i ét objekt, som siderne importerer
const facade = { login, register, logout, fetchData, isLoggedIn };

export default facade;
