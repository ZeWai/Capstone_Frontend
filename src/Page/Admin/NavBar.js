import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logout from './Logout';

export const NavBar = () => {
    return (
        <>
            <div className="admin-nav container-fluid">
                <div className="admin-wrapper row">
                    <div className="admin-nav-logo-wrapper col-3">
                        <img className="admin-nav-logo" alt='logo' src='https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103'></img>
                    </div>
                    <div className="admin-nav-title-wrapper col-6">
                        <p className="admin-nav-title">Admin Control Panel</p>
                    </div>
                    <div className="admin-nav-logout-btn-wrapper col-3">
                        <Link to="/home" className='admin-nav-logout-btn' onClick={Logout}>
                            <FontAwesomeIcon className='nav-logout-btn' icon={faSignOutAlt} size="2x" />
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}