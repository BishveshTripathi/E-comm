import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import Select from "../selectDrop/select";


const Header = () => {

  const [categories,setCategories] = useState([
    'All categories',
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & Beauty',
    'Fresh Seafood',
    'Pet Foods & Toys',
    'Fast Foods',
    'Baking MAterial',
    'Vegetables',
    'Fresh Fruits',
    'Vegetables',
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & Beauty',
    'Fresh Seafood',
  ])

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={Logo} alt="err" />
          </div>
          {/* header search */}
          <div className="col-sm-5">
            <div className="headerSearch d-flex align-items-center">
            <Select data={categories}/>
              
              <div className="search">
                <input type="text" placeholder="Search for items.."/>
                <SearchIcon className="searchIcon cursor"/>
              </div>
            </div>
          </div>
          {/* Header Search Start Here */}
          <div className="col-sm-5">
            <Select/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
