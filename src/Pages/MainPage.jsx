import React from 'react'
import NotificationBar from '../MainPage/NotificationBar'
import UpdatedHeader from '../MainPage/UpdatedHeader'
import Navbar from '../MainPage/Navbar'
import LoginCard from '../MainPage/LoginCard'
import ContentAnimation from '../MainPage/ContentAnimation'
import Footer from '../MainPage/footer'


const MainPage = () => {
  return (
    <div className='bg-[#ebf1de] min-h-screen'>

      {/* Notification Bar */}
      <NotificationBar />

      {/* Header */}
      <UpdatedHeader />

      {/* Navbar */}
      <Navbar />

      {/* MainContent */}
      <div className="relative ">
        <ContentAnimation />
        <div className="absolute inset-0 flex items-center justify-end  px-4 py-10  lg:px-16">
          <LoginCard />
        </div>
      </div>

      <Footer />

      {/* MAIN LAYOUT AREA */}
      {/* <div className='flex w-full m-4 gap-4'> */}

        {/* LEFT SIDE (75%) */}
        {/* <div className= ' mx-2 w-[70%]'>
          <MainContent />
        </div> */}

        {/* RIGHT SIDE (25%) */}
        {/* <div className='w-[30%] flex flex-col gap-4'>
          <LoginCard />
          <NewsCard />
        </div> */}

      </div>
  )
}

export default MainPage
