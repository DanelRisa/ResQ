import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logowhite.png';


const Navbar = ({ currentUser, showModeratorBoard, showAdminBoard, logOut }) => {
  return (
    <nav className="navbar navbar-expand navbar" style={{ position: "sticky", top: "0", backgroundColor: "#059666", display: "flex", zIndex: "1", justifyContent: "center", color: "white" }}>
     
      <div className="navbar-nav mr-auto" style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to={"/"} className="navbar-brand">
      <div style={{ padding: "6px" }}><img src={logo} height={60} style={{ height: 60 }} /></div>
      </Link>

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
          <Link to={'/'}><div style={{ padding: "20px" }}>Home</div></Link>
          {showModeratorBoard && (
            <Link to={"/mod"}><div style={{ padding: "20px" }}>Moderator Board</div></Link>
          )}
          {showAdminBoard && (
            <Link to={"/admin"}><div style={{ padding: "20px" }}>Admin Board</div></Link>
          )}
          {currentUser && (
            <Link to={"/user"}><div style={{ padding: "20px" }}>User</div></Link>
          )}
        </div>
        {currentUser ? (
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <Link to={"/profile"}><div style={{ padding: "20px" }}>{currentUser.username}</div></Link>
            <a href="/login" style={{ padding: "20px" }} onClick={logOut}>LogOut</a>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <Link to={"/login"}><div style={{ padding: "20px" }}>Login</div></Link>
            <Link to={"/register"}><div style={{ padding: "20px" }}>Sign Up</div></Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
