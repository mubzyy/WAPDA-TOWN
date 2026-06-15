import React from 'react' 
import Container from '../Container'
const MainBody = ({searchKey,setSearchKey,searchValue,setSearchValue,handleSearch,currentData,startIndex,setCurrentPage,
toggleStatus, filteredMembers, totalPages,currentPage , members ,handleView ,showModal , setShowModal , selectedMember ,handleEdit , setShowEditModal , showEditModal,handleDelete , setShowDeleteModal ,showDeleteModal , handlePrint , showPrintModal,setShowPrintModal , handleAdd , setShowAddModal}) => {


  return (
    <div className=''>
      <Container
         searchKey={searchKey}
        setSearchKey={setSearchKey}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
        currentData={currentData}
        startIndex={startIndex}
        toggleStatus={toggleStatus}
        setCurrentPage={setCurrentPage}
        filteredMembers={filteredMembers}
         totalPages={totalPages} 
         currentPage = {currentPage}
         members = {members}
         handleView = {handleView}
         showModal = {showModal}
         setShowModal = {setShowModal}
         selectedMember = {selectedMember}
         handleEdit = {handleEdit}
         setShowEditModal = {setShowEditModal}
         showEditModal = {showEditModal}
         handleDelete = {handleDelete}
         setShowDeleteModal = {setShowDeleteModal}
         showDeleteModal = {showDeleteModal}
         handlePrint = {handlePrint}
         showPrintModal = {showPrintModal}
         setShowPrintModal = {setShowPrintModal}
         handleAdd = {handleAdd}
         setShowAddModal = {setShowAddModal}
      />
    </div>
  )
}

export default MainBody
