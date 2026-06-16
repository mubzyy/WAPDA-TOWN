import React from 'react';
import DashboardSection from './DashboardSection';

const Dashboard = () => {
  return (
    <div>
    <div>
      {/* HEADER */}
        <div>
            <p className='w-full text-white underline bg-blue-700 px-4'>Executive Dashboard</p>
        </div>
        {/* MAINBODY */}
        <div>
        {/* left Content */}
        <div >
        <div> 
          <DashboardSection title={
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='w-1/3'>
                <p>1. PLOTS STATUS</p>
              </div>
              <div className='flex gap-4 w-1/3 px-1'>
                <p className=''> CAT-1</p>
                <p className=''> CAT-2</p>
                <p className=''> CAT-3</p>
              </div>
              <div className=''>
                <p >CAT-n</p>
              </div>
            </div>
          }>
          <div className='flex flex-row w-full justify-between items-start'>
              <div>
            <p>a. Total Plots</p>
            <p>b. Available</p>
            <p>c. Available for Auction</p>
             </div>
             <div className='flex gap-4'>
            <div>
            <p>xxxxx</p>
            <p>xxxxx</p>
            <p>xxxxx</p>
            </div>
            <div>
            <p>xxxxx</p>
            <p>xxxxx</p>
            <p>xxxxx</p>
            </div>
            <div>
            <p>xxxxx</p>
            <p>xxxxx</p>
            <p>xxxxx</p>
            </div>
            </div>
            <div>
            <p>xxxxx</p>
            <p>xxxxx</p>
            <p>xxxxx</p>
            </div>
          </div>
          </DashboardSection>
          
          <DashboardSection title= '2. DUES PENDING' >
            <div className='flex flex-row w-full gap-8 items-start w-full items-start'>
              <div className='w-1/2 gap-2'>
            <p>a. Installments</p>
            <p>b. Water/Sewerage Charges</p>
            <p>c. Other Dues</p>
            </div>
            <div className='w-1/2 gap-2 px-7'>
              <p>xxxxxxxxxx</p>
              <p>xxxxxxxxxx</p>
              <p>xxxxxxxxxx</p>
            </div>
            </div>
          </DashboardSection>
          <DashboardSection title={
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='w-3/7'>
                <p>3. PAYMENTS RECEIVED</p>
              </div>
              <div className='flex gap-3  px-8 w-3/5 justify-between'>
                <p className=''>THIS MONTH</p>
                <p className=''>LAST MONTH</p>
                <p className=''>YEAR TO DATE</p>
              </div>
              <div className='w-2/6'>

              </div>
            </div>
            
            }>
              <div className='flex flex-row w-full gap-8 items-start w-full items-start'>
                <div> 
            <p>a. Installments</p>
            <p>b. Water/Sewerage Charges</p>
            <p>c. Other Dues</p>
            </div>
            <div className='flex gap-2  px-9 w-3/6 justify-between'>
            <div>
            <p>xxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
            </div>
            <div>
            <p>xxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
            <p>xxxxxxxxxx</p> 
            </div>
            <div>
            <p>xxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
            </div>
            </div>
            </div>
          </DashboardSection>
          <DashboardSection title='4. ALLOTMENT APPLICATIONS PENDING FOR ACTION'>
            <div className='flex flex-row w-full gap-8 items-start w-full items-start'>
            <div className='w-1/4 gap-2'>
            <p className='underline font-semibold'>APPLICANT CATEGORY</p>
            <p>a. Apllication Category-1</p>
            <p>b. Apllication Category-1</p>
            <p>c. Apllication Category-1</p>
            </div>
            <div className='w-3/4 gap-2 px-7 flex flex-row justify-between'>
            <div>
              <p>Plot Size-1</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              </div>
              <div>
              <p>Plot Size-2</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              </div>
              <div>
              <p>Plot Size-3</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              </div>
              <div>
              <p>Plot Size-4</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              </div>
              <div> 
              <p>Plot Size-5</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p> 
            </div>
            </div>
            </div>
          </DashboardSection>
          </div>
          </div>
        </div>
       
        </div>
    </div>
    
  );
};

export default Dashboard;
