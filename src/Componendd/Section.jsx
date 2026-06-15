
import SearchSection from './SearchSection'
import PendingDues from './PendingDues'
import OwnerShipHistory from './OwnerShipHistory'

const Section = ({properties}) => {
   return (
  <div className='border min-h-screen m-3 rounded-xl overflow-hidden bg-[#e7eed8]'>
      <SearchSection/>
      <PendingDues/>
      <OwnerShipHistory 
      properties = {properties}
      
      />
    </div>
  )
}

export default Section
