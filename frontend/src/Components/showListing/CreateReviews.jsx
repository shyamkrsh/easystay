import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { IoSend } from "react-icons/io5";
import StarIcon from '@mui/icons-material/Star';


function CreateReviews({ id }) {
  const [value, setValue] = React.useState(1);

  let baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post(`${baseUrl}/api/reviews/${id}/new`, {
      content: data.content,
      rating: value,
    },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    ).then((res) => {
      if (res.data.success) {
        toast.success("Your review added", {
          position: 'top-right'
        });
      } else {
        toast.error(res.data.message, {
          position: 'top-right'
        });
      }

      reset()
      setValue(1);
    }).catch((err) => {
      toast.error(err.message, {
        position: 'top-right'
      });
    })
  }


  return (
    <div className='px-3 md:px-[15%] mb-32'>
      <div className='bg-slate-900 p-5 w-[100%] md:w-[50%]'>
        {/* <button className='btn bg-yellow-400 mb-12'>Add Review</button> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-multiline-flexible"
            label='Write your review here'
            multiline
            maxRows={4}
            autoComplete="current-name"
            className='w-full'
            style={{backgroundColor: '#3a5d5e', borderRadius: "5px"}}
            {...register("content", { required: true })}
            InputLabelProps={{
              style: {color: "white"}
            }}
            inputProps={{
              style: { color: 'white', borderRadius: "10px" } // Makes input text white
          }}
          />

          <br /> <br />
          <div className='flex justify-between items-center'>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                event.preventDefault();
                setValue(newValue);
              }}
              emptyIcon={<StarIcon style={{ color: '#d3d3d3' }} fontSize="inherit" />}
            />

              <button type='submit' className='w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white'> <IoSend className='text-3xl'/></button>
         
          </div>


        </form>
      </div>
    </div>
  )
}

export default CreateReviews