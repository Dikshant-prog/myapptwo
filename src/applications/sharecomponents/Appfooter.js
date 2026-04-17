import React from 'react';
import { Link } from 'react-router-dom';

const Appfooter = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 border">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-danger">MyWebsite</h4>
            <p>
              We provide high-quality services to grow your business.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className='text-info'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className='text-info'>Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/web-dev" className="text-light text-decoration-none">Web Development</Link></li>
              <li><Link to="/app-dev" className="text-light text-decoration-none">App Development</Link></li>
              <li><Link to="/seo" className="text-light text-decoration-none">SEO</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className='text-info'>Contact</h5>
            <p>Email: support@mywebsite.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Location: India</p>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <p className="mb-0">© 2026 MyWebsite | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Appfooter;