import { Link } from "react-router-dom";

function ErrorPage () {

    return (
        <div>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>

            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    )

}


export default ErrorPage;