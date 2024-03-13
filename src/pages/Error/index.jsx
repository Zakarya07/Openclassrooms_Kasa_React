import { Link } from "react-router-dom";
import  Header  from "../../components/Header"
import  Footer  from "../../components/Footer"
import "./index.scss"

const ErrorPage =  () => {

    return (
        <>
        <Header />
        <section className="wrapper main-content">
            <h1 className="error-number text-primary">404</h1>
            <h2 className="error-message text-primary">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
        <Footer />
        </>
    )

}


export default ErrorPage;