import { useState } from "react";
import { Link } from "react-router-dom";

import TopNavBar from "./TopNav";


import { SiYourtraveldottv } from "react-icons/si";


const Menu = () => {

  const [alertShow, setAlertShow] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (

    <div>
      <TopNavBar show={alertShow} setShow={setAlertShow} />

      <nav
        className={
          navbar
            ? "navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3 scrollBg"
            : "navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3"
        }
      >
        <div className="container">
          <Link className="navbar-brand ml-2" to="/">

            <a href='/' className="logo">
              <SiYourtraveldottv style={{ width: "150px" }} className='icon' />
            </a>
          </Link>


          <div class="navbar navbar-default">
            <div class="navbar-inner">
              <ul class="nav navbar-nav">
                <li class="active mx-4"><a href="#">Home</a></li>
                <li class="active mx-4" ><a href="#">Projects</a></li>
                <li class="active mx-4"><a href="#">Services</a></li>
                <li class="active mx-4"><a href="#">Downloads</a></li>
                <li class="active mx-4"><a href="#">About</a></li>
                <li class="active mx-4"><a href="#">Contact</a></li>
              </ul>
            </div>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="btn btn-outline-success">Menu</span>
            </button>
          </div>
        </div >
      </nav >
    </div >


  );
};

export default Menu;
