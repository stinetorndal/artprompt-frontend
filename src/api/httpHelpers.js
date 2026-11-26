import { getToken, isLoggedIn } from "./tokenStorage";

// Bygger indstillingerne til et request.
// method: "GET", "POST", "PUT" eller "DELETE"
// addToken: true, hvis endpointet kræver login
// body: data, der skal sendes med (eller null)
function makeOptions(method, addToken, body) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  if (addToken && isLoggedIn()) {
    options.headers.Authorization = "Bearer " + getToken();
  }
  if (body) {
    options.body = JSON.stringify(body);
  }
  return options;
}

// FEJLHÅNDTERING. Tjekker svaret fra serveren.
// Er det en fejl, kastes en Error med backendens besked. OK =  server returnerer data
// async = noget der skal ventes på
async function handleHttpErrors(res) {
  // res = response
  if (!res.ok) {
    const error = new Error(await getErrorMessage(res));
    error.status = res.status;
    throw error;
  }
  if (res.status === 204) {
    return null; // 204 har ingen body ....fordi den jo er slettet
  }
  return res.json();
}

// Finder fejlbeskeden i svaret fra backend.
// Backend sender { "message": "..." } via MessageDTO
async function getErrorMessage(res) {
  try {
    const body = await res.json();
    return body.message || "Der skete en fejl";
  } catch {
    return "Der skete en fejl (" + res.status + ")";
  }
}

export { makeOptions, getErrorMessage };
