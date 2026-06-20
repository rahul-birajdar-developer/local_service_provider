import { Link } from "react-router-dom";

function AppNavbar({ setShowSignup }) {

    return (
        <>
            <nav>
                <div className="logo"><Link to={'/'}>Fix<span>It</span> Pro</Link></div>
                <ul className="nav-links">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/viewbookings'}>Bookings</Link></li>
                    <li><Link to={'/providers'}>Providers</Link></li>
                    <li><Link to={'/profile'}>Profile</Link></li>
                </ul>

                <div className="nav-actions">
                    <button className="btn-primary" onClick={() => setShowSignup(true)}>Sign Up</button>
                </div>

            </nav>
        </>
    )
}

export default AppNavbar;