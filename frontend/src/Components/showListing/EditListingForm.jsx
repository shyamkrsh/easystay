import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DemoNav from "../DemoNav"
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';



function EditListingForm() {

  let baseUrl = import.meta.env.VITE_API_BASE_URL;

  const { id } = useParams();
  const [listingData, setListingData] = useState(null);



  useEffect(() => {
    try {
      axios.get(`${baseUrl}/api/listings/${id}/show`).then((res) => {
        console.log(res.data.data)
        setListingData(res.data.data);
      }).catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  }, [])



  const user = useSelector((state) => state.user.user);
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [search, setSearch] = useState(false);
  const onSubmit = (data) => {
    setSearch(true);
    const formData = new FormData();
    const images = [image1, image2, image3, image4];
    images.forEach((image) => {
      formData.append('images', image);
    });

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    axios.patch(`${baseUrl}/api/listings/edit/${id}`, formData, {
      withCredentials: true,
    }).then((res) => {
      setSearch(false);
      if (res.data.success) {
        toast.success("Place Updated", {
          position: 'top-right'
        });
      } else {
        toast.error(res.data.message, {
          position: 'top-right'
        });
      }
      navigate("/")
    }).catch((err) => {
      setSearch(false);
      toast.error(err.message, {
        position: 'top-right'
      });
    })
  }


  return (

    <>
      <DemoNav heading={"Edit your service details"} />
      <div className='w-[100vw] h-[150vh]' style={{ backgroundColor: '#141d30' }}>
        <div className='w-[100%] mt-36 md:mt-44 px-10 py-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border shadow-md'>
          <h1 className='text-2xl font-semibold text-center text-white'>Update your service details</h1>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

            {/* image input completed */}
            <div className='mt-5'>
              {listingData && (
                <TextField
                  id="title"
                  label="Change name of the house, hostel or hotel"
                  type="text"
                  autoComplete="current-name"
                  className="w-full"
                  defaultValue={listingData?.title}
                  {...register("title", { required: false })}
                  InputLabelProps={{
                    style: { color: 'white' }
                  }}
                  inputProps={{
                    style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
                  }}
                />
              )}
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>
            <div className='mt-5'>
              <select id='category' name='category' className='border border-slate-300 w-full h-[55px] px-3 text-slate-800'
                {...register("category", { required: false })}
              >
                <option value={listingData?.category}>Select Category</option>
                <option value="hostel" >Hostel</option>
                <option value="hotel" >Hotel</option>
                <option value="resturant" >Resturant</option>
                <option value="park" >Park</option>
                <option value="swimmingPool" >Swimming Pool</option>
                <option value="boysHostel" >Boys Hostel</option>
                <option value="girlsHostel" >Girls Hostel</option>
                <option value="roomForRent" >Room for Rent</option>
              </select>
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>
            <div className='mt-5'>
              {listingData && (
                <TextField
                  id="location"
                  label="Change location"
                  type="text"
                  autoComplete="current-location"
                  className="w-full"
                  defaultValue={listingData.location}
                  {...register("location", { required: false })}
                  InputLabelProps={{
                    style: { color: 'white' }
                  }}
                  inputProps={{
                    style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
                  }}
                />
              )}
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>
            <div className='mt-5'>
              <select id='category' name='availability' className='border border-slate-300 w-full h-[55px] px-3 text-slate-800'
                {...register("availability", { required: false })}
              >
                <option value={listingData?.availability}>{listingData?.availability}</option>
                <option value="available" >Available</option>
                <option value="unavailable" >Unavailable</option>
              </select>
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>

            <div className='mt-5'>
              {listingData && (
                <TextField
                  id="price"
                  label='Change price in rupee'
                  type="text"
                  autoComplete="current-price"
                  className='w-full'
                  defaultValue={listingData.price}
                  {...register("price", { required: false })}
                  InputLabelProps={{
                    style: { color: 'white' }
                  }}
                  inputProps={{
                    style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
                  }}
                />
              )}
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>

            <div className='mt-5 flex items-center justify-between'>
              <div className='relative rounded-md h-[4rem] cursor-pointer' style={{ border: '1px dashed gray' }}>
                <CloudUploadIcon className='opacity-80 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white' />
                <input
                  type="file"
                  id='image1'
                  name='images[image1]'
                  className='w-[120px] lg:w-[200px] opacity-0'
                  defaultValue={listingData?.images[0]?.url}
                  onChange={(e) => setImage1(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{listingData?.images[0]?.filename?.slice(0, 10) + "..."}</p>
              </div>

              <div className='relative rounded-md h-[4rem] cursor-pointer' style={{ border: '1px dashed gray' }}>
                <CloudUploadIcon className='opacity-80 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white' />
                <input
                  type="file"
                  id='image2'
                  name='images[image2]'
                  className='w-[120px] lg:w-[200px] opacity-0'
                  defaultValue={listingData?.images[1]?.url}
                  onChange={(e) => setImage2(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{listingData?.images[1]?.filename?.slice(0, 10) + "..."}</p>
              </div>

            </div>
            <div className='mt-5 flex items-center justify-between'>
              <div className='relative rounded-md h-[4rem] cursor-pointer' style={{ border: '1px dashed gray' }}>
                <CloudUploadIcon className='opacity-80 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white' />
                <input
                  type="file"
                  id='image3'
                  name='images[image3]'
                  className='w-[120px] lg:w-[200px] opacity-0'
                  defaultValue={listingData?.images[2]?.url}
                  onChange={(e) => setImage3(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{listingData?.images[2]?.filename?.slice(0, 10) + "..."}</p>
              </div>
              <div className='relative rounded-md h-[4rem] cursor-pointer' style={{ border: '1px dashed gray' }}>
                <CloudUploadIcon className='opacity-80 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white' />
                <input
                  type="file"
                  id='image4'
                  name='images[image4]'
                  className='w-[120px] lg:w-[200px] opacity-0'
                  defaultValue={listingData?.images[3]?.url}
                  onChange={(e) => setImage4(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{listingData?.images[3]?.filename?.slice(0, 10) + "..."}</p>
              </div>
            </div>


            <div className='mt-5'>
              <select id='payment' name='payment' className='border border-slate-300 w-full h-[55px] px-3 text-slate-800'
                {...register("payment", { required: false })}
              >
                <option value={listingData?.payment}>Select Payment Status</option>
                <option value="pending" >Pending</option>
                <option value="done" >Done</option>
              </select>
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>
            <div className='mt-5'>
              {listingData && (
                <TextField
                  id="description"
                  type="text"
                  multiline
                  autoComplete="current-description"
                  className='w-full'
                  style={{ color: 'white', backgroundColor: '#628b8c' }}
                  defaultValue={listingData.description}
                  {...register("description", { required: false })}
                  InputLabelProps={{
                    style: { color: 'white' }
                  }}
                  inputProps={{
                    style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
                  }}
                />
              )}
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>



            <div className='flex flex-col mt-8'>
              <Button variant="contained" type='submit'>
                {
                  search ? <p className='flex items-center gap-3'>Submiting <span className="loading loading-spinner loading-md"></span></p> : <p>Submit</p>
                }
              </Button>

            </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default EditListingForm