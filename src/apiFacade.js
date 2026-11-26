// Adressen til backend. Under udvikling kører backenden lokalt på port 7070
const BASE_URL = "http://localhost:7070/api/v1";
const LOGIN_ENDPOINT = "/auth/login";


  // Er brugeren logget ind? Ja, hvis der ligger et token
  function loggedIn() {
    return getToken() != null;
  }


  


  

  // Samler alle funktioner i ét objekt, som resten af appen kan importere
  const facade = {
    setToken,
    getToken,
    loggedIn,
    login,
    register,
    logout,
    fetchData,
  };
}

export default facade;
