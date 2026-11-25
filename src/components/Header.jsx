import { Link } from 'react-router'

// header med logo ArtPrompt til venstre. Til højre to knapper med login  + opret
// knapper skal være med links Link ...

function Header() {
    return (
        <header>
            <Link to="/" className="logo">ArtPrompt</Link>
            <nav>
                <ul>
                    <li><Link to="/login">Log på</Link></li>
                    <li><Link to="/register">Opret bruger</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header