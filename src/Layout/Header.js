import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/influens.svg";
import "./styles/header.css";

export default function Header(props) {
  const isLogin = localStorage.getItem("isLogin");
  console.log(isLogin);
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
              <a className="nav-link colorLink fw-bolder" href="#">
                Cari Influencer
              </a>
            </li>
          </ul>

          {isLogin ? (
            <div className="dropdown navbar-nav">
              <a
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <div className="dropdown-item pe-none p-4">
                    <div className="fw-bolder text-center">John Mayer</div>
                    <div className="text-secondary text-center">
                      john@mail.com
                    </div>
                  </div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="fw-bolder text-secondary">
                      Profil dan Status
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="fw-bolder text-secondary">Favorit Saya</div>
                  </a>
                </li>

                <hr />
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    keluar
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button className="btn me-2 rounded-pill secondary" type="submit">
                Daftar
              </button>
              <button className="btn rounded-pill mainColor" type="submit">
                Masuk
              </button>
            </>
          )}
          
        </div>
      </div>
    </nav>
  );
}
