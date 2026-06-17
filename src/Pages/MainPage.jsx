import React from 'react'
import NotificationBar from '../Components/NotificationBar'
import UpdatedHeader from '../Components/UpdatedHeader'
import Navbar from '../Components/Navbar'
import MainContent from '../Components/MainContent'
import LoginCard from '../Components/LoginCard'
import NewsCard from '../Components/NewsCard'

const MainPage = () => {
  return (
    <div className='bg-[#ebf1de] min-h-screen border-2'>

      {/* Notification Bar */}
      <NotificationBar />

      {/* Header */}
      <UpdatedHeader />

      {/* Navbar */}
      <Navbar />

      {/* MAIN LAYOUT AREA */}
      <div className='flex w-full m-4 gap-4'>

        {/* LEFT SIDE (75%) */}
        <div className= ' mx-2 w-[70%]'>
          <MainContent />
        </div>

        {/* RIGHT SIDE (25%) */}
        <div className='w-[30%] flex flex-col gap-4'>
          <LoginCard />
          <NewsCard />
        </div>

      </div>

    </div>
  )
}

export default MainPage