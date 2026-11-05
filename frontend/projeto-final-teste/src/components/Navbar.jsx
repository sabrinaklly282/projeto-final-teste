import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Instagram</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/'><a className="nav-link active" aria-current="page" >Pagina inicial</a></Link>
                            <Link to='/feed'><a className="nav-link" >Feed</a></Link>
                            <Link to='/perfil'><a className="nav-link" >Perfil</a></Link>
                            <Link to='/configuracoes'><a className="nav-link" >Configurações</a></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;