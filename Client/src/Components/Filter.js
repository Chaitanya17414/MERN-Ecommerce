import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from './Redux/Actions/actions';

const Filter = () => {
  const [sortkey, setsortkey] = useState("popular");
  const [categorykey, setcategorykey,] = useState("all");
  const dispatch= useDispatch();

  const handleSort =(e) =>{
    const sortkey = e.target.value;
    setsortkey(sortkey)
   console.log(categorykey,sortkey)
    dispatch(filterProducts({categorykey,sortkey}))
  }
  const handleCatogory =(e) =>{
    const categorykey = e.target.value
    setcategorykey(categorykey)
    console.log(categorykey,sortkey)
    dispatch(filterProducts({categorykey,sortkey}))
  }

  return (
    <div className='lg:container xl:container flex justify-end gap-5 my-5 mx-auto sm:justify-center md:mx-7'>
        <div >
            <select value={sortkey} onChange={(e)=>handleSort(e)} className='p-3 border border-gray-500 rounded-lg bg-white'>
                 <option  value="popular">Popular</option>
                 <option  value="htl">High To Low</option>
                 <option  value="lth">Low To High</option>   
            
            </select>
        </div>
        <div>
            <select value={categorykey} onChange={(e) => handleCatogory(e)} className='p-3 border border-gray-500 rounded-lg bg-white'>
                 <option  value="all">All</option>
                 <option  value="smartphones">Smart Phones</option>
                 <option  value="laptops">Laptops</option>
                 <option  value="fragrances">Fragrences</option>   
                 <option  value="skincare">Skincare</option>
                 <option  value="groceries">Groceries</option>
                 <option  value="home-decoration">Home Decoration</option>
            </select>
        </div>
    </div>
   
  );
};

export default Filter;
