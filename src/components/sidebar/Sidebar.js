import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar-section">
        <div className="sidebar-subsection">
            <span className="sidebar-title">About me</span>
            <img className="sidebar-image" src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="sidebar-subsection">
            <span className="sidebar-title">Categories</span>
            <ul clasName="sidebar-categories">
                <li className="sidebar-category">Buy</li>
                <li className="sidebar-category">Sell</li>
                <li className="sidebar-category">Rent</li>
                <li className="sidebar-category">Hostel</li>
                <li className="sidebar-category">BnB</li>
                <li className="sidebar-category">Hotel</li>
            </ul>
        </div>
        <div className="sidebar-subsection">
            <span className="sidebar-title">Follow us on:</span>
            <div className="sidebar-social-icons">
                <i className="sidebar-social-icon fa-brands fa-facebook"></i>
                <i className="sidebar-social-icon fa-brands fa-instagram"></i>
                <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
                <i className="sidebar-social-icon fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;