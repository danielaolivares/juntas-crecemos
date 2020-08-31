import React from 'react';

import HomeNavbar from '../../components/HomeNavbar/HomeNavbar'

const FeedContent = (props) => {

    return (
      <div>
          <HomeNavbar />
        <div className="home-content">
          {props.children}
        </div>
      </div>
    )
  }
export default FeedContent;