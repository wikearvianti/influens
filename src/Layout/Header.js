/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/influens.svg";
import "./styles/header.css";

export default function Header(props) {
  const isLogin = localStorage.getItem("isLogin");
  let userData = JSON.parse(localStorage.getItem("data-daftar"));
  const navigate = useNavigate()

  const onSubmit = () => {
    localStorage.setItem("isLogin", false);
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm">
      <div className="container">
        <Link to="/" className="mt-0 me-4" href="#">
          <img src={logo} width="80" height="80" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Beranda
              
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search-influence" className="nav-link colorLink fw-bolder" href="#">
                Cari Influencer
              </Link>
            </li>
          </ul>

          {isLogin === "true" ? (
            <div className="dropdown navbar-nav">
              <a
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                  width="40"
                  height="40"
                  className="rounded-circle objfit"
                  alt="profile"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <div className="dropdown-item pe-none p-4">
                    <div className="fw-bolder text-center">{userData.username}</div>
                    <div className="text-secondary text-center">
                      {userData.email}
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/profile" className="dropdown-item" href="#">
                    <div className="fw-bolder text-secondary">
                      Profil dan Status
                    </div>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item pe-none" href="#">
                    <div className="fw-bolder text-muted">Favorit Saya <span className="fw-lighter text-warning" >(on dev)</span></div>
                  </a>
                </li>

                <hr />
                <li>
                  <a className="dropdown-item text-danger" href="#" onClick={()=>onSubmit()}>
                    keluar
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/daftar" className="btn me-2 rounded-pill secondary" type="submit">
                Daftar
              </Link>
              <Link to="/login" className="btn rounded-pill mainColor" type="submit">
                Masuk
              </Link>
            </>
          )}
          
        </div>
      </div>
    </nav>
  );
}
