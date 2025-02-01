import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected bootstrap import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.css';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Items from './itemslist';
import { Display1 } from './display';
import Navbar from './Navbar';

export const Header1 = ({ login}) => {
  const [b, setB] = useState([]);                                                     // Initialize with an empty array
   
  //For show Search box in Header.
  const Search = () => {
    document.getElementById('Search').style.display = 'block';
  };


  //For Searching a category in Search box.
  const Searching = () => {
    const a = document.getElementById('Searching').value;
    const c = Items.filter((curelem) => curelem.category === a);                             // Case-sensitive filtering
    setB(c);
  };

  return (
    <div className="container">
      <div className=" d-md-flex flex-md-row flex-column p-1 border-bottom justify-content-center border-dark fontStyle">
        <div className="px-3">
          <h1 className="text-center">Click N Buy</h1>
        </div>
        <div className="w-75 m-auto gap-2 d-flex justify-content-center justify-content-md-end">
          <FontAwesomeIcon
            className="p-3 arrow fs-3"
            icon={faMagnifyingGlass}
            onClick={Search}
          />
          <FontAwesomeIcon className="p-3 arrow fs-3" icon={faUser} onClick={() => window.location.href="/" }/>
        </div>
        
      </div>
      <div id="Search" className="container p-2 rounded-2 m-2 text-center bg-dark-subtle"
        style={{ display: 'none' }}                                   // Initially hide the search box
      >
        <input type="text" id="Searching" className="fs-5 rounded-1 p-2 border-0 bg-body-tertiary" placeholder="Search your category" />
        <button className="btn bg-info fs-5" onClick={Searching}>Search</button>
        <br />


        {/* This is to display items in Search box div.  */}
        {b.length > 0 ? (
          b.map((curelem, index) => (
            <Display1 key={index} item={curelem} />                  // Key for each element
          ))
        ) : (
          <h3 className='p-2'>Search any Category [ Books, Electronics, Fashion, Grocery ] </h3>
        )}
      </div>
    </div>
  );
};

export const Header2 = () => {
  const [filtered, setFiltered] = useState(Items); // Corrected state setter name


  // For filtering the items based on category.
  const Filter = (category) => {

    // filter for All.
    if (category === "All") {
      setFiltered(Items);
    }

    //Filter for other categories except All.
    else {
      const fit = Items.filter((curelem) => curelem.category === category);
      setFiltered(fit);
    }
  };


  // Filtering the category for Header, if new category added it will automatically display in header. 
  const uniquelist = ["All", ...new Set(Items.map((curelem) => {
    return curelem.category;
  })),
  ]
  // console.log(uniquelist);

  return (
    <>
      <div className="container my-3 d-flex justify-content-around pt-4">
        <div className="list head py-1 pt-3 px-2 px-md-5 rounded-5 bg-body-secondary">
          <ul className="list-unstyled text-decoration-none d-flex w-100 gap-md-5 gap-3 fs-2 justify-content-evenly">
            <Navbar uniquelist={uniquelist} Filter={Filter} />
          </ul>
        </div>
      </div>
      <Display1 filtered={filtered} />
    </>
  );
};
