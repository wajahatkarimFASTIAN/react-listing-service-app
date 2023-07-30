import React from 'react'
import './TopBar.css'

function TopBar () {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <i className="topbar-social-icon fa-brands fa-facebook"></i>
                <i className="topbar-social-icon fa-brands fa-instagram"></i>
                <i className="topbar-social-icon fa-brands fa-linkedin"></i>
                <i className="topbar-social-icon fa-brands fa-twitter"></i>
            </div>
            <div className="topbar-center">
                <ul className="topbar-list">
                    <li className="topbar-list-item">HOME</li>
                    <li className="topbar-list-item">ABOUT US</li>
                    <li className="topbar-list-item">CONTACT</li>
                    <li className="topbar-list-item">CREATE LISTING</li>
                    <li className="topbar-list-item">LOGOUT</li>
                </ul>
            </div>
            <div className="topbar-right">
                <img className="topbar-profile-pic" src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=800" />
                <i className="topbar-search fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar
