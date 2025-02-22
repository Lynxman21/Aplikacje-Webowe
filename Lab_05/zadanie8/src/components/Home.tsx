import React from "react";;
import {Link} from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Witaj przyjacielu!</h1>
            <Link to="/blog">Przejdź do bloga </Link>
            <Link to="/dodaj">Dodaj artykuł</Link>
        </div>
    );
};

export default Home;