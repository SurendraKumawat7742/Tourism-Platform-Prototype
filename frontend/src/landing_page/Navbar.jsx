import React from "react";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5 fixed-top z-3">
      <div class="container-fluid" style={{ marginLeft: "100px" }}>
        <img
                src="Images/logo.jpg "
                style={{ width: "50px", borderRadius: "10px", marginRight:"5px"}}
              />
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search" style={{ marginLeft: "10rem" }}>
            <div class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ borderRadius: "20px" }}
              />
              <button
                class="btn btn-outline-success d-flex align-items-center gap-2"
                style={{ borderRadius: "20px" }}
                type="button"
                onClick={handleClick}
              >
                <i class="fa-solid fa-magnifying-glass" />
                Search
              </button>
            </div>
          </form>
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 "
            style={{ marginLeft: "30rem" }}
          >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <select
                aria-label="Language select"
                style={{
                  padding: "8px",
                  borderRadius: "10px",
                  border: "1px solid rgba(2,6,23,0.06)",
                }}
              >
                <option>English</option>
                <option>हिन्दी</option>
              </select>
            </li>
            <li class="nav-item dropdown" style={{marginRight:"50px"}}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i class="fa-regular fa-user"></i>&nbsp;My profile
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    <button>Login</button>&nbsp;&nbsp;&nbsp;
                    <button>Signup</button>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
