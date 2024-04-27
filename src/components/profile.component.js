import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
        <div className="container d-flex justify-content-center mt-56">
          <div className="row">
              {this.state.userReady &&
                <div>
                  <h1>
                  Профиль <strong>{currentUser.username}</strong> 
                  </h1>
                  <p>
                    <strong>Токен:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                  </p>
                  <p>
                    <strong>Id:</strong>{" "}
                    {currentUser.id}
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                  </p>
                  <strong>Роль:</strong>
                  <ul>
                    {currentUser.roles &&
                      currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                  </ul>
                </div>
              }
            </div>
          </div>
      );
      
  }
}
