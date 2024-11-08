import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios'

import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';



function NewListingForm() {

  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post("/api/listings/new", data, {
      withCredentials: true,
    }).then((res) => {
      toast.success("New Place added", {
        position: 'top-right'
      });
      navigate("/")
    }).catch((err) => {
      toast.error(err.message, {
        position: 'top-right'
      });
    })
  }


  return (

    <>
      <div className='bg-blue-600 text-white flex flex-start gap-5 w-[100%] px-5 py-5 fixed top-0 z-10'>
        <Link to="/"><IoArrowBack className='text-2xl font-extrabold' /></Link>
        <h2 className='text-xl font-semibold'>Online your rooms</h2>
      </div>

      <div className='w-[100%] mt-12 md:mt-8 p-10 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

          {/* image input completed */}
          <div className='mt-5'>
            <TextField
              id="title"
              label='Enter name of the house, hotstel or hotel'
              type="text"
              autoComplete="current-name"
              className='w-full'
              {...register("title", { required: true })}
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
              {...register("location", { required: true })}
            />
            {errors.name && <span className='text-red-600'>Please fill this field</span>}
          </div>
          <div className='mt-5'>
            <select id='category' name='availability' className='border border-slate-300 w-full h-[55px] px-3 text-slate-800'
              {...register("availability", { required: true })}
            >
              <option value="">Select Availability</option>
              <option value="available" >Available</option>
              <option value="unavailable" >Unavailable</option>
            </select>
            {errors.name && <span className='text-red-600'>Please fill this field</span>}
          </div>

          <div className='mt-5'>
            <TextField
              id="price"
              label='Enter price'
              type="text"
              autoComplete="current-price"
              className='w-full'
              {...register("price", { required: true })}
            />
            {errors.name && <span className='text-red-600'>Please fill this field</span>}
          </div>

          <div className='mt-5 flex items-center justify-between'>
            <div className=''>
              <input
                type="file"
                id='image1'
                name='image1'
                className='w-[150px] md:w-[200px]'
                {...register("image1")}
              />
            </div>
            <div className=''>
              <input
                type="file"
                id='image2'
                name='image2'
                className='w-[150px] md:w-[200px]'
                {...register("image2")}
              />
            </div>
          </div>
          <div className='mt-5 flex items-center justify-between'>
            <div className=''>
              <input
                type="file"
                id='image3'
                name='image3'
                className='w-[150px] md:w-[200px]'
                {...register("image3")}
              />
            </div>
            <div className=''>
              <input
                type="file"
                id='image4'
                name='image4'
                className='w-[150px] md:w-[200px]'
                {...register("image4")}
              />
            </div>
          </div>


          <div className='mt-5'>
            <select id='payment' name='payment' className='border border-slate-300 w-full h-[55px] px-3 text-slate-800'
              {...register("payment", { required: true })}
            >
              <option value="">Select Payment Status</option>
              <option value="pending" >Pending</option>
              <option value="done" >Done</option>
            </select>
            {errors.name && <span className='text-red-600'>Please fill this field</span>}
          </div>
          <div className='mt-5'>
            <TextField
              id="description"
              label='Write Description'
              type="text"
              multiline
              autoComplete="current-description"
              className='w-full'
              {...register("description", { required: true })}
            />
            {errors.name && <span className='text-red-600'>Please fill this field</span>}
          </div>



          <div className='flex flex-col mt-8'>
            <Button variant="contained" type='submit'>
              Submit
            </Button>

          </div>


        </form>

      </div>
    </>
  )
}

export default NewListingForm