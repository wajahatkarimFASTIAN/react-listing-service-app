import React from 'react'
import './ListingItem.css'

function ListingItem() {
  return (
    <div className="listing-item">
        <img className="listing-image" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" />
        <div className="listing-detail">
            <div className="listing-categories">
                <span className="listing-category">Buy</span>                
                <span className="listing-category">Sell</span>                
            </div>
            <span className="listing-title">Awesome Property Available.</span>
            <hr />
            <span className="listing-time">2 days ago</span>
        </div>
        <p className="listing-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default ListingItem;