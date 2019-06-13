import React from 'react';
// import IGword from '../../assets/ig_post.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
     <div className="social">
     <i class="fab fa-instagram"/>
        </div>
      <div className="image-wrapper">
        {/* <img alt="instagram logo" src={IGword} className="logo-image" /> */}
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;