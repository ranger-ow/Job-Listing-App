import React from "react";
import { useEffect, useState } from 'react';
import FilterItem from './components/FilterItem';
import Header from './components/Header';
import JobCard from './components/JobCard';

function App() {
  const [listings, setListings] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    const fdata = async () => {
      try {
        let result = await fetch("/jobs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const listingsData = await result.json();

        setListings(listingsData);

      } catch (error) {
        console.log(error);

      }
    }
    fdata();
  }, [filters])

  const filterListings = (filter_by = null) => {

    if (!filters.includes(filter_by) && filter_by !== null)
      setFilters([...filters, filter_by])

    setListings(listings.filter(listing => [...listing.languages, ...listing.tools].includes(filter_by)))
  }

  const removeFilter = (removed_filter) => {
    setFilters(filters.filter(item => item !== removed_filter))
  }
  return (
   
      <div>
        <Header />
        
        <div className="flex justify-center items-center text-black h-12">
          {filters.map(filter => <FilterItem item={filter} _callback={removeFilter} key={filter} />)}
        </div>
        <div className="grid p-16 justify-center items-center text-gray-900">
          <h1 className="text-4xl font-semibold mb-6 mt-8 text-teal-800">Job Openings</h1>
          {listings.map(listing => <JobCard listing={listing} key={listing._id} filtering={filterListings} />)}
        </div>
      </div>
    
  );
}

export default App;
