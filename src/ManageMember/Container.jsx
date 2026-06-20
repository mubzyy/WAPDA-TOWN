
import SearchSection from './SearchSection'
import TableSection from './ManageMember/TableSection'
import Pagination from './ManageMember/Pagination'
import TotalRecordSelected from './ManageMember/TotalRecordSelected'
import ViewMemberModal from './ViewMemberModal'
import ShowEditModal from './ShowEditModal'
import ShowDeleteModal from './ShowDeleteModal'
import PrintMemberModal from './PrintMemberModal'
import AddNewModal from './AddNewModal'





const Container = ({searchKey,setSearchKey,searchValue,setSearchValue,handleSearch,currentData,startIndex,setCurrentPage,
toggleStatus, filteredMembers, totalPages,currentPage , members,handleView,showModal , setShowModal , selectedMember,handleEdit , setShowEditModal , showEditModal,handleDelete , setShowDeleteModal ,showDeleteModal, handlePrint , showPrintModal , setShowPrintModal , handleAdd , setShowAddModal}) => {


  
  return (
    <div className='border-2 h-[560px] m-4 bg-[#ebf1de] rounded-2xl overflow-hidden '>

 <SearchSection
  searchKey={searchKey}
  setSearchKey={setSearchKey}
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  handleSearch={handleSearch}
  setCurrentPage={setCurrentPage}
  handleAdd = {handleAdd}
  setShowAddModal={setShowAddModal}
/>

      {/* TABLE GETS DATA */}
      <TableSection 
      
       currentData={currentData}
       startIndex={startIndex}
       toggleStatus={toggleStatus}
       members = {members}
       handleView = {handleView}
       handleEdit = {handleEdit}
       handleDelete = {handleDelete}
       handlePrint = {handlePrint}
      />
      {/* PAGINATION + TOTAL RECORD SELECTED */}
      <div className='flex flex-col items-center space-y-8  lg:space-y-0 lg:flex-row  lg:justify-around  mt-4'>
        {/* PAGINATION CONTROLS STATE  */}
        <Pagination
        currentPage={currentPage}
          currentData={currentData}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
         />
        <TotalRecordSelected
        TotalRecords={filteredMembers.length}

        />
      </div>
      {/* SHOWVIEW MODAL */}
      {showModal && (
      <ViewMemberModal
      showModal = {showModal}
      setShowModal = {setShowModal}
      selectedMember = {selectedMember} 
      />
      )}
  {/*  SHOWEDIT MODAL */}
  {showEditModal && (
  <ShowEditModal
    setShowEditModal = {setShowEditModal}
    showEditModal = {showEditModal}
    selectedMember = {selectedMember}
  
  />
  )}
  {showDeleteModal && ( 
<ShowDeleteModal
  setShowDeleteModal = {setShowDeleteModal}
  showDeleteModal = {showDeleteModal}
  selectedMember = {selectedMember}
  />
  )}
 {showPrintModal && (
  <PrintMemberModal
    selectedMember={selectedMember}
    setShowPrintModal={setShowPrintModal}
    
  />
)}
{AddNewModal && (
<AddNewModal 
 setShowAddModal = {setShowAddModal}
 selectedMember = {selectedMember}

/>
)}
    </div>
    
  )
}

export default Container

