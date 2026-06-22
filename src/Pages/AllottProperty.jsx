import { useState } from 'react'
import NotificationBar from '/src/MainPage/NotificationBar'
import SignupNavbar from '../MainPage/SignupNavbar'
import UpdatedHeader from '../MainPage/UpdatedHeader'
import Wrapper from '../AllottProperty/Wrapper'
import Footerr from '../AllottProperty/Footerr'

const AllottProperty = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      sr: 1,
      membershipNo: "M-1001",
      cnic: "35202-1234567-1",
      name: "Ahmed Ali",
      fatherName: "Muhammad Ali",
      propertyType: "Agricultural Land",
      propertyNumber: "P-002",
      block: "B-Block",
      landArea: "5",
      landAreaUnit: "Acres",
      coveredArea: "2",
      coveredAreaUnit: "Acres",
      dimensionL: "",
      dimensionLUnit: "",
      dimensionW: "",
      dimensionWUnit: "",
      ownerSince: "2005",
    },
    {
      id: 2,
      sr: 2,
      membershipNo: "M-1002",
      cnic: "35202-1234567-2",
      name: "Usman Khan",
      fatherName: "Imran Khan",
      propertyType: "Residential Plot",
      propertyNumber: "P-015",
      block: "A-Block",
      landArea: "10",
      landAreaUnit: "Marla",
      coveredArea: "8",
      coveredAreaUnit: "Marla",
      dimensionL: "",
      dimensionLUnit: "",
      dimensionW: "",
      dimensionWUnit: "",
      ownerSince: "2012",
    },
    {
      id: 3,
      sr: 3,
      membershipNo: "M-1003",
      cnic: "35202-1234567-3",
      name: "Bilal Ahmed",
      fatherName: "Nadeem Ahmed",
      propertyType: "Commercial Plot",
      propertyNumber: "P-021",
      block: "C-Block",
      landArea: "1",
      landAreaUnit: "Kanal",
      coveredArea: "1",
      coveredAreaUnit: "Kanal",
      dimensionL: "",
      dimensionLUnit: "",
      dimensionW: "",
      dimensionWUnit: "",
      ownerSince: "2018",
    }
  ])
  // STATES FOR SEARCHKEY AND VALUE
  const [searchKey, setSearchKey] = useState("membershipNo")
  const [value, setValue] = useState("")

  // STATE FOR FILTERED DATA 
  const [filterProperty, setFilterProperty] = useState(properties);
  const [searchedMember, setSearchedMember] = useState(null);

//  STATE FOR EDIT  STATE
const[edit , setEdit] = useState(null)

// STATE FOR EDIT FORM DATA 
const[editFormData , setEditFormData] = useState(null)

//STATE FOR EDIT MODE 
const[editMode , setEditMode] = useState(false) 

// STATE FOR DELETEMODAL 
const [openDModal , setOpenDModal] = useState(false)
const[selectedMember , setSelectMember] = useState(null)


  
  //  handleSearch
  const handleSearch = () => {
     if (value.trim() === "") {
    setFilterProperty([]);
    setSearchedMember(null);
    return;
  }
    const filterData  = properties.filter((property) =>
    String(property.membershipNo || "")
        .toLowerCase()
        .trim()
        .includes(value.toLowerCase().trim())
      
    );

    setFilterProperty(filterData);
     setSearchedMember(filterData[0] || null);
    
  
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

//  OpenDeleteModal 
const  handleDeleteModal = (property) => {
  setOpenDModal(true)
  setSelectMember(property)
}




  return (
    <div className='bg-[#ebf1de] min-h-screen   border-b '>
      <NotificationBar />
      <UpdatedHeader/>
       <SignupNavbar/>
      
      <Wrapper 
        properties={properties}
        setProperties={setProperties}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
        filterProperty={filterProperty}
        searchedMember={searchedMember}
        handleAddProperty={handleAddProperty}
        handleDeleteRow = {handleDeleteRow}
        handleEdit = {handleEdit}
        editFormData={editFormData}
       handleUpdateProperty = {handleUpdateProperty}
       editMode = {editMode}
       setEdit = {setEdit}
       setEditFormData = {setEditFormData}
       setEditMode = {setEditMode}
       handleDeleteModal = {handleDeleteModal}
       openDModal = {openDModal}
       selectedMember = {selectedMember}
       setOpenDModal = {setOpenDModal}
      />
      <Footerr />
    </div>
  )
}

export default AllottProperty
