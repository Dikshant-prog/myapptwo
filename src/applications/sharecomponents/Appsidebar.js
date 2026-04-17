import React from 'react';
import { Link } from 'react-router-dom';

function Appsidebar() {
  return (
    <div className="flex-shrink-0 p-3" style={{ width: "250px" }}>
      
      {/* Logo / Title */}
      <Link
        to="/"
        className="d-flex align-items-center pb-3 mb-3 text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">Collapsible</span>
      </Link>

      <ul className="list-unstyled ps-0">

        {/* HOME */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
          >
            Home
          </button>

          <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><Link to="/dashboard" className="link-dark d-inline-flex text-decoration-none rounded">Dashboard</Link></li>
              <li><Link to="/main" className="link-dark d-inline-flex text-decoration-none rounded">Main</Link></li>
              <li><Link to="/graphpage" className="link-dark d-inline-flex text-decoration-none rounded">Graph</Link></li>
              <li><Link to="/employeepage" className="link-dark d-inline-flex text-decoration-none rounded">Employee</Link></li>
            </ul>
          </div>
        </li>

        {/* DASHBOARD */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
          >
            Dashboard
          </button>

          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Weekly</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Monthly</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Annually</Link></li>
            </ul>
          </div>
        </li>

        {/* ORDERS */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
          >
            Orders
          </button>

          <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">New</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Processed</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Shipped</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Returned</Link></li>
            </ul>
          </div>
        </li>

        <li className="border-top my-3"></li>

        {/* ACCOUNT */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
          >
            Account
          </button>

          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">New</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</Link></li>
              <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</Link></li>
            </ul>
          </div>
        </li>

      </ul>
    </div>
  );
}

export default Appsidebar;