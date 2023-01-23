import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
         <div className="header_logo">
          <StorefrontIcon className='header_logo_image' fontSize='large'/>
          <h2 className="header_logo_title">eShop</h2>
     </div>
     <div className="header_search">
          <input type='text' className='header_search_input'/>
          <SearchIcon className='header_search_icon'/>
     </div>
     <div className="header_nav">
         <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
         </div>
        <div className="nav_item">
           <span className="nav_itemLineOne">Your</span>
           <span className="nav_itemLineTwo">Shop</span>
          </div>
          <div className="nav_item">
          <ShoppingBasketIcon  className='nav_item_basket'/>
           <span className="nav_itemLineTwo nav_item_basketCount">0</span>
          </div>
     </div>
      
    </div>
  );
}

export default Header;
