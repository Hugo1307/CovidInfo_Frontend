import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const TopBar = () => (
    <Navbar className="navbar-expand-lg navbar-light mt-4" style={{backgroundColor: "transparent"}}>
        <Container className="container-fluid">
            <span className="navbar-brand fs-4 fw-bold">Covid Info</span>
            <div className="collapse navbar-collapse mx-4">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link"  to="/">World Statistics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/country">Country Statistics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/country_history">Country History</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cache_details">Cache Details</Link>
                    </li>
                </ul>
            </div>
            <div className="mx-4">
                <form className="form-inline">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </Container>
    </Navbar>
);

export default TopBar;