// Et kort med overskrift og tekst
// laves som link

import { Link } from 'react-router'

// Giver path, headline, text fra props, så de kan bruges direkte
function FeatureCard({ path, headline, text }) {
    return (
        <Link to={path} className="feature-card" >
            <h2>{headline}</h2>
            <p>{text}</p>
        </Link>
    )
}

export default FeatureCard