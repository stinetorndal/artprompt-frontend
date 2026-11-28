// Viser en fejlbesked
// Ingen besked -  intet vises = Conditional rendering, vises kun hvis betingelse er sand
function ErrorMessage({ message }) { //message = prop   
    if (!message) {
        return null;
    }
    return <p className="error-message">{message}</p>
}

export default ErrorMessage