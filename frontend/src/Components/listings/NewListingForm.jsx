import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import DemoNav from '../DemoNav'


function NewListingForm() {
  let baseUrl = import.meta.env.VITE_API_BASE_URL;

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
    axios.post(`${baseUrl}/api/listings/new`, formData, {
      withCredentials: true,
    }).then((res) => {
      setSearch(false);
      if (res.data.success) {
        toast.success("New Place added", {
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
      <DemoNav heading={"Online your services"} />
      <div className='w-[100vw] h-[150vh]' style={{ backgroundColor: '#141d30' }}>

        <div className='w-[100%] pt-36 md:pt-5 md:mt-44 px-10 py-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border shadow-md '>
          <h1 className='text-2xl font-semibold text-center text-white'>Online Form</h1>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

            {/* image input completed */}
            <div className='mt-5'>
              <TextField
                id="title"
                label='Enter name of the house, hotstel or hotel'
                type="text"
                autoComplete="current-name"
                className='w-full'
                style={{ backgroundColor: '#3a5d5e', borderRadius: "5px" }}
                {...register("title", { required: true })}
                InputLabelProps={{
                  style: { color: "white" }
                }}
                inputProps={{
                  style: { color: 'white', borderRadius: "10px" } // Makes input text white
                }}
              />
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>
            <div className='mt-5'>
              <select id='category' name='category' className='border border-slate-300 w-full h-[55px] px-3 text-slate-800'
                {...register("category", { required: true })}
              >
                <option value="" >Select Category</option>
                <option value="hostel" >Hostel</option>
                <option value="hotel" >Hotel</option>
                <option value="resturant" >Resturant</option>
                <option value="park" >Park</option>
                <option value="swimmingPool" >Swimming Pool</option>
                <option value="boysHostel" >Boys Hostel</option>
                <option value="girlsHostel" >Girls Hostel</option>
                <option value="roomForRent" >Room for Rent</option>
                <option value="roomsForCollege" >Rooms near NGP patna-13</option>
              </select>
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>
            <div className='mt-5'>
              <TextField
                id="location"
                label='Enter your location'
                type="text"
                autoComplete="current-location"
                className='w-full'
                style={{ backgroundColor: '#3a5d5e', borderRadius: "5px" }}
                {...register("location", { required: true })}
                InputLabelProps={{
                  style: { color: "white" }
                }}
                inputProps={{
                  style: { color: 'white', borderRadius: "10px" } // Makes input text white
                }}
              />
              {errors.name && <span className='text-red-600'>Please fill this field</span>}
            </div>
           

            <div className='mt-5 flex'>
              <TextField
                id="price"
                label='Enter price in rupee'
                type="number"
                autoComplete="current-price"
                className='w-full'
                style={{ backgroundColor: '#3a5d5e', borderRadius: "5px" }}
                {...register("price", { required: true })}
                InputLabelProps={{
                  style: { color: "white" }
                }}
                inputProps={{
                  style: { color: 'white', borderRadius: "10px" } // Makes input text white
                }}
              />
              {errors.name && <span className='text-red-600'>Please fill this field</span>}

              <select id='duration' name='duration' className='border border-slate-300 w-100 h-[55px] px-3 text-slate-800'
                {...register("duration", { required: false })}
              >
                <option value="month" >1 month</option>
                <option value="day" >1 day</option>
              </select>
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
                  onChange={(e) => setImage1(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{image1?.name?.slice(0, 10) + "..."}</p>
              </div>

              <div className='relative rounded-md h-[4rem] cursor-pointer' style={{ border: '1px dashed gray' }}>
                <CloudUploadIcon className='opacity-80 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white' />
                <input
                  type="file"
                  id='image2'
                  name='images[image2]'
                  className='w-[120px] lg:w-[200px] opacity-0'
                  onChange={(e) => setImage2(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{image2?.name?.slice(0, 10) + "..."}</p>
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
                  onChange={(e) => setImage3(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{image3?.name?.slice(0, 10) + "..."}</p>
              </div>
              <div className='relative rounded-md h-[4rem] cursor-pointer' style={{ border: '1px dashed gray' }}>
                <CloudUploadIcon className='opacity-80 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white' />
                <input
                  type="file"
                  id='image4'
                  name='images[image4]'
                  className='w-[120px] lg:w-[200px] opacity-0'
                  onChange={(e) => setImage4(e?.target?.files[0])}
                />
                <p className='text-center mt-2 text-white'>{image4?.name?.slice(0, 10) + "..."}</p>
              </div>
            </div>


            
            <div className='mt-5'>
              <TextField
                id="description"
                label='Write Description'
                type="text"
                multiline
                autoComplete="current-description"
                className='w-full'
                style={{ backgroundColor: '#3a5d5e', borderRadius: "5px" }}
                {...register("description", { required: true })}
                InputLabelProps={{
                  style: { color: "white" }
                }}
                inputProps={{
                  style: { color: 'white', borderRadius: "10px" } // Makes input text white
                }}
              />
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

export default NewListingForm