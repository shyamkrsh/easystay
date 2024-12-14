import React, { useEffect, useState } from 'react'
import Card from './Card'
import Filter from './Filter';
import Footer from '../Footer'
import SearchNavbar from '../SearchNavbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Loader from '../Loader'
import toast from 'react-hot-toast';
import speeking from '../../assets/video/speeking.gif'
import { IoFilter } from "react-icons/io5";

function Listings() {
  let baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [listings, setListings] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [showListen, setShowListen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);


  let handleFilter = (minPrice, maxPrice) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setShowFilter(!showFilter);
  }

  const { category } = useParams();

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      axios.get(`${baseUrl}/api/listings/search/${category}`, { withCredentials: true }).then((res) => {
        setLoader(false);
        setListings(res.data.data);
      }).catch((err) => {

      })
    }, 1500);

  }, []);

  return (
    <>
      <div className='bg-slate-800'>
        <SearchNavbar search={search} setSearch={setSearch} setShowListen={setShowListen} />
        {/* <div className='mb-20'>
        <Filter />
      </div> */}
        <div className={loader ? " mx-auto  text-black w-[100%] h-[100vh] items-center justify-center fixed" : "hidden"}>
          <Loader />
        </div>

        <div className={showListen ? 'pt-28' : 'hidden'}>
          <div className='w-[100vw] h-[90vh] flex items-center justify-center'>
            <img src={speeking} className='' />
          </div>
        </div>
        <div className='fixed top-16 z-10 mb-26 w-[100%] md:w-[30rem]'>
          <div className='h-[3rem] flex items-center justify-between px-10'>
            <div className='filter-price text-white bg-slate-500 px-4 py-2 rounded-md cursor-pointer hover:opacity-95 font-semibold flex items-center justify-center gap-2' onClick={() => setShowFilter(!showFilter)}><IoFilter/>Filter</div>
            
          </div>
          <div className={showFilter ? 'bg-slate-200 w-[100%] md:w-[30rem]': "hidden"}>
            <ul>
              <li className='px-10 py-2 cursor-pointer border border-b-slate-700 text-black'><p className='text-xl font-semibold'>Price</p></li>
              <li className='hover:bg-slate-300 px-10 py-2 cursor-pointer border border-b-slate-700 text-black' onClick={() => handleFilter(1000, 2000)}><button >₹ 1,000 -- ₹ 2,000</button></li>
              <li className='hover:bg-slate-300 px-10 py-2 cursor-pointer border border-b-slate-700 text-black' onClick={() => handleFilter(2000, 3000)}><button >₹ 2,000 -- ₹ 3,000</button></li>
              <li className='hover:bg-slate-300 px-10 py-2 cursor-pointer border border-b-slate-700 text-black' onClick={() => handleFilter(3000, 4000)}><button >₹ 3,000 -- ₹ 4,000</button></li>
              <li className='hover:bg-slate-300 px-10 py-2 cursor-pointer border border-b-slate-700 text-black' onClick={() => handleFilter(4000, 5000)}><button >₹ 4,000 -- ₹ 5,000</button></li>
              <li className='hover:bg-slate-300 px-10 py-2 cursor-pointer border border-b-slate-700 text-black' onClick={() => handleFilter(5000, 10000)}><button >₹ 5,000 -- ₹ 10,000</button></li>
              <li className='hover:bg-slate-300 px-10 py-2 cursor-pointer border border-b-slate-700 text-black' onClick={() => handleFilter(10000, 100000000)}><button >Above ₹ 10, 000</button></li>
            </ul>
          </div>
        </div>

        <div className={showListen ? "hidden" : 'grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 px-5 gap-2 pt-36'}>
          {
            search ?
              listings?.map((item) => (
                search && search.replaceAll(",", "").toLowerCase().split(" ").some((word) => item.location.replaceAll(",", "").toLowerCase().includes(word) && (item?.price >= minPrice && item?.price <= maxPrice) || item.title.replaceAll(",", "").toLowerCase().includes(word) && (item?.price >= minPrice && item?.price <= maxPrice)) ?
                  <Link to={`/listings/show/${item?._id}`} key={item?._id}>
                    <Card key={item?._id} image={item?.images} title={item?.title} price={item?.price} description={item?.description} street_address={item?.location} />
                  </Link>
                  : null
              ))
              :
              listings?.map((item) => (
                (item?.price >= minPrice && item?.price <= maxPrice)?
                <Link to={`/listings/show/${item?._id}`} key={item?._id}>
                  <Card key={item?._id} image={item?.images} title={item?.title} price={item?.price} duration={item?.duration} description={item?.description} street_address={item?.location} />
                </Link>
                : ""
              ))
          }
        </div>

        <div className='w-full text-center mt-28'>
          <h1 className={listings?.length != 0 ? "hidden" : 'text-3xl font-bold text-center p-5'}>No Such Result Available</h1>
        </div>

        <div className='mt-[100%]'>
          <Footer />
        </div>

      </div>
    </>
  )
}

export default Listings