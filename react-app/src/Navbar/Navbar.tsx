export default function Navbar(){
    return <>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0">
            <a className="navbar-brand" href="#"><img className="logo" src="src/assets/images/logo.png" alt="logo"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Support</a>
                    </li>
                </ul>
                <button className="btn btn-outline-success ms-2" type="button" id="openModal">Log in</button>
            </div>
        </div>
    </nav>
    </>;
}