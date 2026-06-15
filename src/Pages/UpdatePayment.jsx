import React, { useState } from 'react'
import NotificationBar from '/src/Components/NotificationBar'
import UpdatedHeader from '/src/Components/UpdatedHeader'
import Navbar from '../Components/Navbar'
import Layout from '../Componend/Layout'
import OpenPaymentModal from '../Componend/OpenPaymentModal'

const UpdatePayment = () => {
  const [members , setMembers] = useState([
    {
      id: 1,
      sr: 1,
      membershipNo: "M-1001",
      propertyType: "Agricultural Land",
      propertyNumber: "P-002",
      block: "B-Block",
      landArea: "5 Acres",
      coveredArea: "2 Acres",
      amountDue: "20000000",
    },
     {
      id: 2,
      sr: 2,
      membershipNo: "M-1002",
      propertyType: "Fertile Land",
      propertyNumber: "P-003",
      block: "C-Block",
      landArea: "15 Acres",
      coveredArea: "21 Acres",
      amountDue: "16000000",
    },
     {
      id: 3,
      sr: 3,
      membershipNo: "M-1005",
      propertyType: "Raw Land",
      propertyNumber: "P-0010",
      block: "D-Block",
      landArea: "25 Acres",
      coveredArea: "22 Acres",
      amountDue: "10000000",
    }
  ])

  //   USESTATES
  const[searchKey , setSearchKey] = useState("membershipNo")
  const[value , setValue] = useState("")

//  STATE FOR EDITMODE
const[editMode , setEditMode] = useState(false)

// State For Edit 
const [edit , setEdit] = useState(null)

// STATE FOR EDITFORMDATA
 const [editFormData , setEditFormData]  = useState()

  // FILTER 
  const [filterMembers , setFilterMembers] = useState(members)

// STATE FOR OPENPAYMENT MODAL
const [showPaymentModal  , setShowPaymentModal] = useState(false)
const[selectedMember , setSelectedMember] = useState(null)

//  handlePay 
const handlePay = (member) => {
  setSelectedMember(member);
  setShowPaymentModal(true)
}

// HANDLE PAYMENT SUBMISSION FROM MODAL
const handlePaymentSubmit = (paymentData) => {
  if (!selectedMember) return;
  
  const updatedMembers = members.map((member) => {
    if (member.id === selectedMember.id) {
      return {
        ...member,
        amountDue: Math.max(0, Number(member.amountDue) - Number(paymentData.amountReceived))
      };
    }
    return member;
  });
  
  setMembers(updatedMembers);
  setFilterMembers(updatedMembers);
  setShowPaymentModal(false);
  setSelectedMember(null);
  console.log("Payment received:", paymentData);
}

  //  handleSearch 
  const  handleSearch = () => {
    console.log("button Clicked")
    const updatedFilter =  members.filter((member)=> 
   member[searchKey]
   .toString()
   .toLowerCase()
   .includes(value.trim().toLowerCase())
)
setFilterMembers(updatedFilter)
  }

  // Amount Due 
const totalAmountDue = filterMembers.reduce(
  (total, member) => total + (Number(member.amountDue) || 0),
  0
);

//  handleEdit 
const handleEdit = (member) => {
  setEditMode(true)
  setEdit(member.id)
  setEditFormData(member)
    
}

 const handleUpdatePayment = (data) => {
const updatedMembers = members.map((member)=> {
  if(member.id === edit )
    return {
  ...member,
  amountDue: 
  Number(member.amountDue)- Number(data.AmountReceived),
    }
     return member;
})
  setMembers(updatedMembers)
  setFilterMembers(updatedMembers)
  setEdit(null)
  setEditMode(false)
  setEditFormData(null)
 }

  return ( 
        <div className='bg-[#a7b38f] min-h-screen border-b '>
      <NotificationBar/>
      <UpdatedHeader/>
      <Navbar/>
      <Layout 
      members = {members}
      setMembers = {setMembers}
      searchKey = {searchKey}
      setSearchKey = {setSearchKey}
      value = {value}
      setValue={setValue}
      handleSearch = {handleSearch}
      filterMembers = {filterMembers}
      totalAmountDue = {totalAmountDue}
      handleEdit = {handleEdit}
      editFormData = {editFormData}
      setEditFormData = {setEditFormData}
      handleUpdatePayment = {handleUpdatePayment}
      handlePay = {handlePay}
      />
      
      {/* PAYMENT MODAL */}
      <OpenPaymentModal 
      isOpen={showPaymentModal}
      onClose={() => {
        setShowPaymentModal(false)
        setSelectedMember(null)
      }}
      onSubmit={handlePaymentSubmit}
      memberData={selectedMember}
      />
      
    </div>
  )
}

export default UpdatePayment
