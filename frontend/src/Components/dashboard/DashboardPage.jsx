import React from 'react'
import DashboardNav from './DashboardNav'
import Hero from './Hero'

function DashboardPage() {
  return (
    <>
      <DashboardNav />
      <div className='fixed'>

        <Hero />

      </div>
    </>
  )
}

export default DashboardPage