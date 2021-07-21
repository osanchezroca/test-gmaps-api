import {FaBoxOpen, FaHome, FaMapMarkedAlt} from "react-icons/all";

export function Navbar() {
    return <header>
        <div className="min-vh-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280}}>
            <a href="/" className="d-flex justify-content-center mb-3 mb-md-0 text-white text-decoration-none">
                Warehouse management
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16">
                            <FaHome style={{width: 16, height: 16}}/>
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16">
                            <FaMapMarkedAlt style={{width: 16, height: 16}}/>
                        </svg>
                        Warehouse Map
                    </a>
                </li>
            </ul>
        </div>
    </header>
}