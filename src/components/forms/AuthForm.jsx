import { useState } from "react"
import ErrorMessage from "../ErrorMessage"
import FormField from "./FormField"

// Fælles formular til Log på og Opret bruger.
// Husker selv email, password og fejlbesked.
// Props: title = overskrift, buttonText = tekst på knappen,

function AuthForm({ title, buttonText, onSubmit, children }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Fejlbeskeden, der vises på siden. Tom tekst = ingen fejl
    const [errorMessage, setErrorMessage] = useState("");

    function handleClear() {
        setEmail("");
        setPassword("");
        setErrorMessage("");
    }

    //Sender email og password til backend
    async function handleSubmit(e) {
        e.preventDefault() // Sørger for browser ikke genindlæser side så React glemmer indtastning
        setErrorMessage("") //Fjerner gammel fejlbesked
        try {
            await onSubmit(email, password)
        } catch (err) {
            setErrorMessage(err.message)
        }
    }
    return (
        <div className="form-card">
            <h1>{title}</h1>
            <form className="form" onSubmit={handleSubmit}>
                <FormField
                    id="email"
                    label="Indtast email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="navn@eksempel.dk"
                />
                <FormField
                    id="password"
                    label="Indtast password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
                <ErrorMessage message={errorMessage} />
                <button type="submit" className="button-primary">{buttonText}</button>
                <button type="button" className="button-secondary" onClick={handleClear}>Ryd alt</button>
            </form>
            {/* Children: Sæt det, forælderen puttede ind mellem tags'ene her. Fast navn i React */}
            {children}
        </div>
    )
}

export default AuthForm
