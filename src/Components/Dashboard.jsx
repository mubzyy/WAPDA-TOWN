import { Fragment } from 'react';
import DashboardSection from './DashboardSection';

const metricRows = [
  'a. Total Plots',
  'b. Available',
  'c. Available for Auction',
];

const duesRows = [
  'a. Installments',
  'b. Water/Sewerage Charges',
  'c. Other Dues',
];

const applicationRows = [
  'a. Application Category-1',
  'b. Application Category-1',
  'c. Application Category-1',
];

const Cell = ({ children, strong = false }) => (
  <div className={strong ? 'font-semibold text-slate-950' : 'text-slate-800'}>
    {children}
  </div>
);

const Dashboard = () => {
  return (
    <div className='flex h-full w-full flex-col text-slate-950'>
      <div>
        <p className='w-full bg-blue-900 px-4 py-2 text-lg font-bold text-white shadow-sm sm:text-xl'>
          Executive Dashboard
        </p>
      </div>
      <div className='flex-1 overflow-x-auto'>
        <div className='min-w-[760px]'>
          <DashboardSection
            title={
              <div className='grid grid-cols-[1.7fr_repeat(4,minmax(90px,1fr))] items-center gap-4'>
                <Cell strong>1. PLOTS STATUS</Cell>
                <Cell strong>CAT-1</Cell>
                <Cell strong>CAT-2</Cell>
                <Cell strong>CAT-3</Cell>
                <Cell strong>CAT-n</Cell>
              </div>
            }
          >
            <div className='grid grid-cols-[1.7fr_repeat(4,minmax(90px,1fr))] gap-x-4 gap-y-2'>
              {metricRows.map((row) => (
                <Fragment key={row}>
                  <Cell key={`${row}-label`} strong>{row}</Cell>
                  <Cell key={`${row}-cat-1`}>xxxxx</Cell>
                  <Cell key={`${row}-cat-2`}>xxxxx</Cell>
                  <Cell key={`${row}-cat-3`}>xxxxx</Cell>
                  <Cell key={`${row}-cat-n`}>xxxxx</Cell>
                </Fragment>
              ))}
            </div>
          </DashboardSection>

          <DashboardSection title='2. DUES PENDING'>
            <div className='grid grid-cols-[1.7fr_repeat(4,minmax(90px,1fr))] gap-x-4 gap-y-2'>
              {duesRows.map((row) => (
                <Fragment key={row}>
                  <Cell key={`${row}-label`} strong>{row}</Cell>
                  <Cell key={`${row}-value`}>xxxxxxxxxx</Cell>
                  <div key={`${row}-empty-1`} />
                  <div key={`${row}-empty-2`} />
                  <div key={`${row}-empty-3`} />
                </Fragment>
              ))}
            </div>
          </DashboardSection>

          <DashboardSection
            title={
              <div className='grid grid-cols-[1.7fr_repeat(3,minmax(120px,1fr))_minmax(60px,0.4fr)] items-center gap-4'>
                <Cell strong>3. PAYMENTS RECEIVED</Cell>
                <Cell strong>THIS MONTH</Cell>
                <Cell strong>LAST MONTH</Cell>
                <Cell strong>YEAR TO DATE</Cell>
                <div />
              </div>
            }
          >
            <div className='grid grid-cols-[1.7fr_repeat(3,minmax(120px,1fr))_minmax(60px,0.4fr)] gap-x-4 gap-y-2'>
              {duesRows.map((row) => (
                <Fragment key={row}>
                  <Cell key={`${row}-label`} strong>{row}</Cell>
                  <Cell key={`${row}-this-month`}>xxxxxxxxxx</Cell>
                  <Cell key={`${row}-last-month`}>xxxxxxxxxx</Cell>
                  <Cell key={`${row}-year`}>xxxxxxxxxx</Cell>
                  <div key={`${row}-empty`} />
                </Fragment>
              ))}
            </div>
          </DashboardSection>

          <DashboardSection title='4. ALLOTMENT APPLICATIONS PENDING FOR ACTION'>
            <div className='grid grid-cols-[1.7fr_repeat(5,minmax(90px,1fr))] gap-x-4 gap-y-2'>
              <Cell strong>
                <span className='underline'>APPLICANT CATEGORY</span>
              </Cell>
              <Cell strong>Plot Size-1</Cell>
              <Cell strong>Plot Size-2</Cell>
              <Cell strong>Plot Size-3</Cell>
              <Cell strong>Plot Size-4</Cell>
              <Cell strong>Plot Size-5</Cell>
              {applicationRows.map((row) => (
                <Fragment key={row}>
                  <Cell key={`${row}-label`} strong>{row}</Cell>
                  <Cell key={`${row}-size-1`}>xxxx</Cell>
                  <Cell key={`${row}-size-2`}>xxxx</Cell>
                  <Cell key={`${row}-size-3`}>xxxx</Cell>
                  <Cell key={`${row}-size-4`}>xxxx</Cell>
                  <Cell key={`${row}-size-5`}>xxxx</Cell>
                </Fragment>
              ))}
            </div>
          </DashboardSection>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
