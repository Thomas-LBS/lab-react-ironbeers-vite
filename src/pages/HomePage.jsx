import { Link } from "react-router-dom";

function HomePage() {
    return (
        <main>
            <Link to="/beers">
                <img src="/src/assets/beers.png" />
                <h1>All Beers</h1>
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
            </Link>

            <Link to="/random-beer">
                <img src="/src/assets/random-beer.png" />
                <h1>Random Beer</h1>
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
            </Link>

            <Link to="/new-beer">
                <img src="/src/assets/new-beer.png" />
                <h1>New Beer</h1>
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
            </Link>
        </main>
    )
}

export default HomePage;
