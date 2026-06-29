
import SearchSection from './SearchSection'
import PendingDues from './PendingDues'
import OwnerShipHistory from './OwnerShipHistory'

const Section = ({
  propertyType,
  setPropertyType,
  propertyNumber,
  setPropertyNumber,
  handleSearch,
  selectedProperty,
}) => {
   return (
  <div className='border-2 min-h-screen m-4 rounded-2xl overflow-hidden bg-[#e7eed8]'>
      <SearchSection
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        propertyNumber={propertyNumber}
        setPropertyNumber={setPropertyNumber}
        handleSearch={handleSearch}
      />
      <PendingDues property={selectedProperty}/>
      <OwnerShipHistory 
      property={selectedProperty}
      
      />
    </div>
  )
}

export default Section
