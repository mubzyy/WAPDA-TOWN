import React, { useState } from 'react'
import NotificationBar from '/src/Components/NotificationBar'
import UpdatedHeader from '../Components/UpdatedHeader'
import Navbar from '../Components/Navbar'
import Wrapper from '../Componends/Wrapper'
import Footerr from '../Componends/Footerr'

const AllottProperty = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      sr: 1,
      membershipNo: "M-1001",
      propertyType: "Agricultural Land",
      propertyNumber: "P-002",
      block: "B-Block",
      landArea: "5 Acres",
      coveredArea: "2 Acres",
      ownerSince: "2005",
    },
    {
      id: 2,
      sr: 2,
      membershipNo: "M-1002",
      propertyType: "Residential Plot",
      propertyNumber: "P-015",
      block: "A-Block",
      landArea: "10 Marla",
      coveredArea: "8 Marla",
      ownerSince: "2012",
    },
    {
      id: 3,
      sr: 3,
      membershipNo: "M-1003",
      propertyType: "Commercial Plot",
      propertyNumber: "P-021",
      block: "C-Block",
      landArea: "1 Kanal",
      coveredArea: "1 Kanal",
      ownerSince: "2018",
    }
  ])
  // STATES FOR SEARCHKEY AND VALUE
  const [searchKey, setSearchKey] = useState("membershipNo")
  const [value, setValue] = useState("")

  // STATE FOR FILTERED DATA 
  const [filterProperty, setFilterProperty] = useState(properties);

//  STATE FOR EDIT  STATE
const[edit , setEdit] = useState(null)

// STATE FOR EDIT FORM DATA 
const[editFormData , setEditFormData] = useState(null)

//STATE FOR EDIT MODE 
const[editMode , setEditMode] = useState(false) 


  
  //  handleSearch
  const handleSearch = () => {
    const filterData = properties.filter((property) =>
      property[searchKey]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setFilterProperty(filterData);
  };
  // handleAddProperty 
  const handleAddProperty = (newProperty) => {
    const property = {
      id: Date.now(),
      ...newProperty
    }
    setProperties((prev) => [...prev, property])
    setFilterProperty((prev) => [...prev, property])
  }
 
//  handleDeleteRow
const handleDeleteRow  = (id) => {
  console.log("Deleting:", id);
  setFilterProperty((prev)=>prev.filter((prop)=> prop.id !== id))
  setProperties((prev)=>prev.filter((prop)=> prop.id !== id))
} 
 
// HANDLE EDIT FUNCTION 
const   handleEdit = (property) => {
  setEditMode(true);
  console.log("EDIT CLICKED");
  setEdit(property.id)
  setEditFormData(property)
}

// handleUPDate
const handleUpdateProperty = (updatedProperty) => {
  setProperties((prev) =>
    prev.map((prop) =>
      prop.id === edit
        ? { ...prop, ...updatedProperty }
        : prop
    )
  );

  setFilterProperty((prev) =>
    prev.map((prop) =>
      prop.id === edit
        ? { ...prop, ...updatedProperty }
        : prop
    )
  );

  
    // Exit Edit Mode
  setEditMode(false);
  // reset edit mode
  setEdit(null);
  setEditFormData(null);
};






  return (
    <div className='bg-[#a7b38f] min-h-screen  '>
      <NotificationBar />
      <UpdatedHeader />
      <Navbar />
      <Wrapper
        properties={properties}
        setProperties={setProperties}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
        filterProperty={filterProperty}
        handleAddProperty={handleAddProperty}
        handleDeleteRow = {handleDeleteRow}
        handleEdit = {handleEdit}
        editFormData={editFormData}
       handleUpdateProperty = {handleUpdateProperty}
       editMode = {editMode}
       setEdit = {setEdit}
       setEditFormData = {setEditFormData}
       setEditMode = {setEditMode}
     
      />
      <Footerr />
    </div>
  )
}

export default AllottProperty
