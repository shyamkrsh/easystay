import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import axios from 'axios'
import { toast } from 'react-hot-toast';


function CreateReviews({ id }) {
  const [value, setValue] = React.useState(1);


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {

    axios.post(`/api/reviews/${id}/new`, {
      content: data.content,
      rating: value,

    }).then((res) => {
      toast.success("Your review added", {
        position: 'top-right'
      });
      reset()
      setValue(1);
    }).catch((err) => {
      toast.error(err.message, {
        position: 'top-right'
      });
    })
  }


  return (
    <div className='px-[10%] md:px-[15%] mb-32'>
      <div>
        <button className='btn bg-yellow-400 mb-12'>Add Review</button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-multiline-flexible"
            label='Write your review here'
            multiline
            maxRows={4}
            autoComplete="current-name"
            className='w-full md:w-[50%]'
            {...register("content", { required: true })}
          />

          <br /> <br />
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              event.preventDefault();
              setValue(newValue);
            }}
          />

          <br /><br />

          <button className='bg-green-500 transition-all w-[100%] md:w-[50%] py-2 hover:bg-green-700' type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default CreateReviews