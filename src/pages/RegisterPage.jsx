import { useNavigate, Link } from "react-router"
import facade from "../api/apiFacade"
import AuthForm from "../components/forms/AuthForm"

// Side, hvor brugeren registrerer sig.
// AuthForm står for formularen. Siden bestemmer kun, hvad der sker ved oprettelse
function RegisterPage() {
    const navigate = useNavigate();

    async function handleRegister(email, password) {
        await facade.register(email, password)
        await facade.login(email, password);
        navigate("/profile")
    }

    return (
        <main>
            <AuthForm title="Opret bruger" buttonText="Opret bruger" onSubmit={handleRegister}>
                <p className="form-footer">
                    Har du allerede en bruger? <Link to="/login">Log på</Link>
                </p>
            </AuthForm>
        </main>
    )
}

export default RegisterPage