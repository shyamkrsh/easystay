import React from 'react'
import MessagesNav from './MessagesNav';

function MessagesPage() {
  return (
    <>
      <MessagesNav />
      <div>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
          <h1 className='text-3xl font-bold'>Empty !</h1>
        </div>
      </div>
    </>
  )
}

export default MessagesPage