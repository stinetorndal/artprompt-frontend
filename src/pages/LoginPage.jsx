import { useNavigate, Link } from "react-router"
import facade from "../api/apiFacade"
import AuthForm from "../components/forms/AuthForm"

// Side, hvor brugeren logger ind.
// AuthForm står for formularen. Siden bestemmer kun, hvad der sker ved login
function LoginPage() {
    const navigate = useNavigate();

    // Logger ind og sender brugeren til forsiden. Fejl vises af AuthForm
    async function handleLogin(email, password) {
        await facade.login(email, password)
        navigate("/")
    }

    return (
        <main>
            <AuthForm title="Log på" buttonText="Log på" onSubmit={handleLogin}>
                <p className="form-footer">
                    Ingen bruger endnu? <Link to="/register">Opret bruger</Link>
                </p>
            </AuthForm>
        </main>
    )
}

export default LoginPage