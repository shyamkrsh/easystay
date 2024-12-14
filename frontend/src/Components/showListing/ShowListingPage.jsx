import React, { useEffect, useState } from 'react'
import ShowSlides from './ShowSlides'
import ListingsDetails from './ListingsDetails'
import ApplyForm from './ApplyForm'
import Footer from '../Footer'
import CreateReviews from './CreateReviews'
import ShowReviews from './ShowReviews'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import DemoNav from '../DemoNav.jsx'
import DeleteListing from './DeleteListing.jsx'



function ShowListingPage() {

  let baseUrl = import.meta.env.VITE_API_BASE_URL;

  const { id } = useParams();
  const [listingData, setListingData] = useState(null);
  const [owner, setOwner] = useState(null);
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/api/listings/${id}/show`).then((res) => {
        setOwner(res.data.owner);
        setListingData(res.data.data);
      }).catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  }, [id])



  const handleEditListing = () => {
    console.log("Editing Listing")
  }

  const [showDelete, setShowDelete] = useState(false);

  


  return (
    <>
      <DemoNav heading={"Details"} />
      <div className='pt-20 '>
        <ShowSlides
          img1={listingData ? listingData?.images[0].url : ""} img2={listingData ? listingData?.images[1].url : ""}
          img3={listingData ? listingData?.images[2].url : ""} img4={listingData ? listingData?.images[3].url : ""}
        />
      </div>

      <div className={owner?._id == user?._id ? "flex items-center justify-center gap-10 md:gap-32 md:mt-5 p-3 mt-3" : "hidden"}>
        <Fab color="secondary" aria-label="edit" onClick={handleEditListing} className='z-0' style={{ zIndex: "0" }}>
          <Link to={`/edit/${id}`}><EditIcon className="text-xl " /></Link>
        </Fab>

        {
          showDelete ? <DeleteListing id={id} /> 
          : <Button variant="outlined" startIcon={<DeleteIcon />} className="h-[2.5rem]" onClick={setShowDelete(true)}>
            Delete
          </Button>


        }

      </div>

      <div className='flex flex-col md:flex-row items-center justify-between px-[10%] md:px-[15%] mt-8 mb-16 gap-24'>
        <ListingsDetails owner={owner} data={listingData ? listingData : ""} id={id} />
        <ApplyForm id={id} amount={listingData?.price} />
      </div>
      <CreateReviews id={id} />
      <div className='px-[10%] md:px-[15%]'>
        <ShowReviews id={id} />
      </div>
      <Footer />
    </>

  )
}

export default ShowListingPage