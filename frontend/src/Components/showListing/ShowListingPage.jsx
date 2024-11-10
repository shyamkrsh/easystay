import React, { useEffect, useState } from 'react'
import ShowListingNav from './ShowListingNav'
import Images from './images'
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


function ShowListingPage() {
  const { id } = useParams();
  const [listingData, setListingData] = useState(null);
  const [owner, setOwner] = useState(null);
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get(`/api/listings/${id}/show`).then((res) => {
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

  const handleDeleteListing = () => {
    axios.delete(`/api/listings/${id}/delete`).then((res) =>{
      toast.success("Your post has been deleted");
      navigate("/dashboard");
    }).catch((err) => {
      toast.error(err.message);
    })
  }


  return (
    <>
      <ShowListingNav />
      <div className='mt-20 '>
        <Images 
        img1={listingData ? listingData.images[0].url : ""} img2={listingData ? listingData.images[1].url : ""}
        img3={listingData ? listingData.images[2].url : ""} img4={listingData ? listingData.images[3].url : ""}
        />
      </div>

      <div className={owner?._id == user?._id ? "flex items-center justify-center gap-10 md:gap-32 md:mt-5 p-3 mt-3" : "hidden"}>
        <Fab color="secondary" aria-label="edit" onClick={handleEditListing} className='z-0' style={{zIndex: "0"}}>
          <EditIcon className="text-xl " />
        </Fab>
        <Button variant="outlined" startIcon={<DeleteIcon />} className="h-[2.5rem]" onClick={handleDeleteListing}>
          Delete
        </Button>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center px-[10%] md:px-[15%] mt-8 mb-16 gap-5'>
        <ListingsDetails owner={owner} data={listingData ? listingData : ""} />
        <ApplyForm id={id} />
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