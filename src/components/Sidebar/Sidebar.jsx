import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTachometerAlt,
  faUsers,
  faBox,
  faChartLine,
  faSignOutAlt,
  faFileAlt,
  faChartBar,
  faPercentage
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "collapsed"}`}>
      <div className="top d-flex align-items-center justify-content-between">
        <span className="logo">Admins</span>
        <FontAwesomeIcon icon={faBars} className="bar-icon" onClick={toggleSidebar} />
      </div>

      {isOpen && (
        <>
          <div className="profile text-center mt-4 mb-3">
            <img src="/images/logo.jpg" alt="admin" className="profile-img" />
            <h3 className="admin-name">Huda Foaud</h3>
            <p style={{color:'#1c9877'}}>VP Fancy Admin</p>
          </div>

          <ul className="menu list-unstyled">
            <li className="mb-4">
              <Link to="/" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/ManageTeam" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faUsers} className="me-2" /> Manage Team
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/ContactInformation" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faBox} className="me-2" /> Contact Information
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/InvoicesBalances" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faChartLine} className="me-2" /> Invoices Balances
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/ProfileForm" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Profile Form
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/FAQ" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> FAQ Page
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/BarChart" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faChartBar} className="me-2" /> Bar Chart
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/PieChart" className="link text-decoration-none text-light">
                <FontAwesomeIcon icon={faPercentage} className="me-2" /> Pie Chart
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
