import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Loader from '../Loader'
import MyListingCard from './MyListingCard'
import { useSelector } from 'react-redux';

function Listings() {
  const [listings, setListings] = useState([]);
  const [loader, setLoader] = useState(false);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/listings/${user._id}`).then((res) => {
        setLoader(false);
        setListings(res.data.data);

      }).catch((err) => {
        console.log(err);
      })
    }, 1500);

  }, []);

  return (
    <>
      <div className={loader ? " text-black w-[75%] h-[100%] items-center justify-center fixed" : "hidden"}>
        <Loader />
      </div>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mb-24 overflow-scroll'>

        {
          listings?.map((item) => (
            item?.owner == user?._id ?
              <Link to={`/listings/show/${item._id}`} key={item._id}>
                <MyListingCard key={item?._id} image={item?.images} title={item?.title} price={item?.price} description={item?.description} street_address={item?.location} />
              </Link>
              : ""
          ))
        }

      </div>
          <div className='w-[100%] flex items-center justify-center'>
            <h1 className={listings ? 'hidden' : "text-center font-bold mt-16 text-2xl block"}>No Such Post Available</h1>
          </div>
      <div className='w-full text-center m-[20rem]'>
        
      </div>
    </>
  )
}

export default Listings