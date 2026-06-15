import React from 'react'
import SearchSectionAllott from './SearchSectionAllott'
import PropertyType from './PropertyType'
import PropertyTable from './PropertyTable'

const Wrapper = ({properties , setProperties , searchKey , value , setValue , setSearchKey , handleAddProperty , setEdit , setEditMode, handleSearch , filterProperty  , handleEdit  , handleDeleteRow , editFormData , handleUpdateProperty , editMode, setEditFormData }) => {
  return (
    <div className='border min-h-screen m-3 rounded-xl overflow-hidden bg-[#e7eed8]'>
      <SearchSectionAllott 
         searchKey = {searchKey} 
         setSearchKey = {setSearchKey} 
         handleSearch = {handleSearch}
         value = {value}
         setValue = {setValue}
        filterProperty = {filterProperty}
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
         handleDeleteRow = {handleDeleteRow}
         handleEdit = {handleEdit}
         handleUpdateProperty = {handleUpdateProperty}
         />
    </div>
  )
}

export default Wrapper
