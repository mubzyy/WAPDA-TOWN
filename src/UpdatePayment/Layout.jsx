
import SearchSectionUpdate from './SearchSectionUpdate'
import AmountDueTable from './AmountDueTable'
import PropertyPayment from './PropertyPayment'
import OpenPaymentModal from './OpenPaymentModal'


const Layout = ({members , setMembers , searchKey , setSearchKey , value , setValue  , handleSearch, handleUpdatePayment , handleResetPaymentForm , filterMembers , handleEdit , totalAmountDue  , editFormData , setEditFormData , handlePay , showPaymentModal }) => {
  return (
        <div className='border-2 min-h-screen m-4 rounded-2xl overflow-hidden bg-[#e7eed8]'>
      <SearchSectionUpdate 
       searchKey = {searchKey}
       setSearchKey = {setSearchKey}
       setValue = {setValue}
       value = {value}
       handleSearch = {handleSearch}
       
      />
      <div className='mb-8'>
      <AmountDueTable 
      members= {members}
      setMembers = {setMembers}
      filterMembers = {filterMembers}
      totalAmountDue = {totalAmountDue}
      handleEdit = {handleEdit}
      handlePay = {handlePay}
      />
      </div>
      <PropertyPayment 
      editFormData = {editFormData}
      setEditFormData = {setEditFormData}
      handleUpdatePayment = {handleUpdatePayment}
      handleResetPaymentForm = {handleResetPaymentForm}
      />
      { showPaymentModal && (
      <OpenPaymentModal />
      )}
    </div>
  )
}

export default Layout
