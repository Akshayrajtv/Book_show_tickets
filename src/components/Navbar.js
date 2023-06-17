import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-light bg-light"
        style={{
          width: "100%",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 9999,
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            AWESOME
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

