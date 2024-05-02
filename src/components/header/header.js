import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import Select from "../selectDrop/select";
import axios from 'axios';


const Header = () => {

  const [categories,setCategories] = useState([
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
  ]);

  const countryList = [];

  useEffect(()=>{
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  },[]);

  const getCountry = async(url)=>{
    try{
      await axios.get(url).then((res)=>{
        if(res!==null){
          res.data.data.map((item,index)=>{
            countryList.push(item.country);
          })
        }
      })
    }catch(error){
      console.log(error.message);
    }
  }

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={Logo} alt="err" />
          </div>


          {/* Category Search Inside Search Bar */}
          <div className="col-sm-5">
            <div className="headerSearch d-flex align-items-center">
            <Select data={categories} placeholder={'All categories'}/>
              <div className="search">
                <input type="text" placeholder="Search for items.."/>
                <SearchIcon className="searchIcon cursor"/>
              </div>
            </div>
          </div>


          {/* Country search next to Search Bar */}
          <div className="col-sm-5 d-flex align-items-center">
            <div className="countryWrapper">
            <Select data={countryList} placeholder={'Your : Location'}/>
            </div>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
