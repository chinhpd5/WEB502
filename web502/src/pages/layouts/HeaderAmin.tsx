import { Link } from "react-router-dom"

function HeaderAdmin(){
    return(
        <nav style={{height : "100vh",padding:0}} className="sticky-top navbar navbar-expand-sm bg-dark border-bottom border-body flex-column align-items-start " data-bs-theme="dark">
                    <div className="container-fluid flex-column">
                        <Link className="navbar-brand" to="/admin">Admin</Link>
                    
                        <div className="collapse navbar-collapse flex-column align-items-start" id="navbarSupportedContent">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/admin">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin/product">Quản lý sản phẩm</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    )
}

export default HeaderAdmin