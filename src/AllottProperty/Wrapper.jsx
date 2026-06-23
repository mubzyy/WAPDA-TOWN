
import SearchSectionAllott from './SearchSectionAllott'
import PropertyType from './PropertyType'
import PropertyTable from './PropertyTable'
import OpenDeleteModal from './OpenDeleteModal'

const Wrapper = ({ searchKey , value , setValue , setSearchKey , handleAddProperty , setEdit , setEditMode, handleSearch , filterProperty , searchedMember , handleEdit  , handleDeleteRow , editFormData , handleUpdateProperty , editMode, setEditFormData , handleDeleteModal , openDModal , selectedMember , setOpenDModal  }) => {
  return (
    <div className='border-2 min-h-screen m-4 rounded-2xl overflow-hidden bg-[#e7eed8]'>
      <SearchSectionAllott 
         searchKey = {searchKey} 
         setSearchKey = {setSearchKey} 
         handleSearch = {handleSearch}
         value = {value}
         setValue = {setValue}
        filterProperty = {filterProperty}
        searchedMember = {searchedMember}
      />
      <div className=''>
        <PropertyType  
          handleAddProperty = {handleAddProperty}
          editFormData={editFormData}
          handleUpdateProperty = {handleUpdateProperty}
          editMode = {editMode}
          setEditFormData = {setEditFormData}
     setEdit = {setEdit}
     setEditMode = {setEditMode}
        />
        </div>
        <PropertyTable 
         filterProperty={filterProperty}
         handleEdit = {handleEdit}
         handleUpdateProperty = {handleUpdateProperty}
         handleDeleteModal = {handleDeleteModal}
         />
         {openDModal &&  (
         <OpenDeleteModal 
            handleDeleteRow = {handleDeleteRow}
            selectedMember = {selectedMember}
            setOpenDModal = {setOpenDModal}
         />
         )}
    </div>
  )
}

export default Wrapper
