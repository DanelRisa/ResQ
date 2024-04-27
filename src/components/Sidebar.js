import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import logo from '../images/logowhite.png';


const Sidebar = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
      setRedirect("/home");
    }
    setCurrentUser(currentUser);
    setUserReady(true);
  }, []);

  const logOut = () => {
    AuthService.logout();
    setRedirect("/login");
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="d-flex ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        </a>
        <div
          className="offcanvas offcanvas-start  show"
          id="offcanvasNavbar"
          data-bs-backdrop="false"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body">
            <Link to={"/"} className="navbar-brand">
            <div style={{ padding: "6px" }}><img src={logo} height={60} style={{ height: 60 }} /></div>
            </Link>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">


              <li className="nav-item " style={{color: "white"}}>
                <Link to={"/"}>
                  Домой
                </Link>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="center">
                    <span className="pg-16" style={{color: "white"}}>Посты</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/profile"} className="nav-link" style={{color: "white"}}>
                        Пользователь: {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link" onClick={logOut} style={{color: "white"}}>
                        Выйти с аккаунта
                      </button>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Login
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
