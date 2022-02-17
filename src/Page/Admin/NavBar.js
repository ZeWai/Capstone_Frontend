import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../store/auth/action";

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="admin-nav container-fluid">
        <div className="admin-wrapper row">
          <div className="admin-nav-logo-wrapper col-lg-3 col-4">
            <img
              className="admin-nav-logo"
              alt="logo"
              src="https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103"
            ></img>
          </div>
          <div className="admin-nav-title-wrapper col-lg-6 col-5">
            <p className="admin-nav-title">Admin Control Panel</p>
          </div>
          <div className="admin-nav-logout-btn-wrapper col-lg-3 col-3">
            <button
              className="admin-nav-logout-btn"
              onClick={() => dispatch(logoutThunk())}
            >
              <FontAwesomeIcon
                className="nav-logout-btn"
                icon={faSignOutAlt}
                size="2x"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
