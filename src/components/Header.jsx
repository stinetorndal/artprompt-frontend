// header med logo ArtPrompt til venstre. Til højre to knapper med login  + opret
// knapper skal være med links a href...


function Header() {
    return (
        <header>
            <a href="/" className="logo">ArtPrompt</a>
            <nav>
                <ul>
                    <li><a href="#">Log på</a></li>
                    <li><a href="#">Opret bruger</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header