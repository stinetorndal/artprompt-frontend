import { Link } from 'react-router'

// Giver path, headline, text fra props, så de kan bruges direkte
function FeatureCard({ path, headline, text, variant }) {
    return (
        // {variant} defineres i App.jsx, det er en prop
        <Link to={path} className={`feature-card feature-card--${variant}`}>
            <h2>{headline}</h2>
            <p>{text}</p>
        </Link>
    )
}

export default FeatureCard