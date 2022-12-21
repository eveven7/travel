import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaPinterest} from 'react-icons/fa'
import {ImInstagram, ImYoutube2, ImLocation2} from 'react-icons/im'


const Footer = () => {

  return (
    <div>
      <section>
        <footer className="text-center" style={{background:"#577191"}}>
          {/* Footers Main menu */}
          <section className="mt-3 pt-5 text-white">
            <div className="container">
              <div className="row">
                  
                <div className="col-md-4">
                  <h6 className="font-weight-bold mb-3">Pages</h6>
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/faq" className="text-white">Conference Services</Link></li>
                    <li className="nav-item"><Link to="/termsconditions" className="text-white">Student Tours Scotland</Link></li>
                    <li className="nav-item"><Link to="/cancellationpolicy" className="text-white">Agents & Affiliates</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">Privacy & Cookies</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">Terms & Conditions</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">Accessibility</Link></li>
                    <li className="nav-item"><Link to="/privacypolicy" className="text-white">Careers</Link></li>
                    <li className="nav-item"><Link to="/shippingpolicy" className="text-white">Blog</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">FAQs</Link></li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h6 className="font-weight-bold mb-3">Links</h6>
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link to="#" className="text-white">Follow us</Link></li>
                    <div className="d-flex m-auto mt-4">
                      <li className="nav-item h1 me-3"><a href="https://www.facebook.com/" target="_blank" className="text-white" rel="noreferrer"><FaFacebookF /></a></li>
                      <li className="nav-item h1 me-3"><a href="https://www.instagram.com/" target="_blank" className="text-white" rel="noreferrer"><ImInstagram /></a></li>
                      <li className="nav-item h1 me-3"><a href="https://www.twitter.com/" target="_blank" className="text-white" rel="noreferrer"><FaTwitter /></a></li>
                      <li className="nav-item h1 me-3"><a href="https://www.pinterest.com/" target="_blank" className="text-white" rel="noreferrer"><FaPinterest /></a></li>
                      <li className="nav-item h1"><a href="https://www.youtube.com/" target="_blank" className="text-white" rel="noreferrer"><ImYoutube2 /></a></li>
                    </div>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h6 className="font-weight-bold mb-3">Contact Us</h6>
                  <ul className="navbar-nav">
                    <li className="nav-item h3"><a href="https://wa.me/4401312263133" target="_blank" className="text-white" rel="noreferrer">+44 (0) 131 226 3133</a></li>
                    <li className="nav-item mt-3 h4"><Link to="#" className="text-white">Find us</Link></li>
                    <li className="nav-item">
                      <Link to="/about" className="text-white">
                        Our Departure Points <ImLocation2 />
                      </Link>
                    </li>

                    <div className='row'>
                    </div>
                  </ul>
                </div>

               
            
              </div>
            </div>
          </section>

     

        </footer>

      </section>
    </div>
  )
}

export default Footer
