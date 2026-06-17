
import { useState } from 'react'
import UpdatedHeader from '../Components/UpdatedHeader'
import NotificationBar from '/src/Components/NotificationBar'
import Navbar from '../Components/Navbar'
import Section from '../Componendd/Section'
import SignupNavbar from '../Components/SignupNavbar'

const PropertyHistory = () => {
  const [propertyType, setPropertyType] = useState("")
  const [propertyNumber, setPropertyNumber] = useState("")
  const [selectedProperty, setSelectedProperty] = useState(null)

  const properties = [
  {
    id: 1,
    propertyType: "Residential Plot",
    propertyNumber: "RP-1001",
    dateOfAllotment: "15-03-2020",
    blockSector: "A Block",
    landArea: "10 Marla",
    coveredArea: "0",
    length: "35 ft",
    width: "65 ft",

    originalAmountDue: 500000,
    amountDueSince: "01-01-2025", 
    defaultMonths: 5,
    penalty: 25000,
    totalAmountDue: 525000,

    ownershipHistory: [
      {
        date: "15-03-2020",
        membershipNo: "M-1001",
        ownerName: "Ali Khan",
        mode: "Allotment",
      },
      {
        date: "12-07-2022",
        membershipNo: "M-1035",
        ownerName: "Ahmed Raza",
        mode: "Transfer",
      },
    ],

    paymentHistory: [
      {
        date: "10-01-2024",
        paymentHead: "Development Charges",
        amountPaid: 50000,
      },
      {
        date: "15-06-2024",
        paymentHead: "Installment",
        amountPaid: 100000,
      },
      {
        date: "20-12-2024",
        paymentHead: "Installment",
        amountPaid: 75000,
      },
    ],
  },

  {
    id: 2,
    propertyType: "Commercial Plot",
    propertyNumber: "CP-2001",
    dateOfAllotment: "10-09-2021",
    blockSector: "Commercial Block C",
    landArea: "5 Marla",
    coveredArea: "0",
    length: "25 ft",
    width: "45 ft",

    originalAmountDue: 250000,
    amountDueSince: "01-03-2025",
    defaultMonths: 3,
    penalty: 10000,
    totalAmountDue: 260000,

    ownershipHistory: [
      {
        date: "10-09-2021",
        membershipNo: "M-1010",
        ownerName: "Usman Tariq",
        mode: "Allotment",
      },
    ],

    paymentHistory: [
      {
        date: "01-01-2024",
        paymentHead: "Development Charges",
        amountPaid: 30000,
      },
      {
        date: "01-08-2024",
        paymentHead: "Installment",
        amountPaid: 50000,
      },
    ],
  },

  {
    id: 3,
    propertyType: "House",
    propertyNumber: "H-3001",
    dateOfAllotment: "20-02-2019",
    blockSector: "B Block",
    landArea: "1 Kanal",
    coveredArea: "4500 Sq Ft",
    length: "50 ft",
    width: "90 ft",

    originalAmountDue: 0,
    amountDueSince: "-",
    defaultMonths: 0,
    penalty: 0,
    totalAmountDue: 0,

    ownershipHistory: [
      {
        date: "20-02-2019",
        membershipNo: "M-1020",
        ownerName: "Shahbaz Ahmed",
        mode: "Allotment",
      },
    ],

    paymentHistory: [
      {
        date: "15-03-2019",
        paymentHead: "House Charges",
        amountPaid: 300000,
      },
      {
        date: "10-10-2020",
        paymentHead: "Development Charges",
        amountPaid: 100000,
      },
      {
        date: "05-05-2021",
        paymentHead: "Final Settlement",
        amountPaid: 200000,
      },
    ],
  },
];

//  handleSearch 

  const handleSearch = () => {
    const trimmedPropertyNumber = propertyNumber.trim()

    if (!trimmedPropertyNumber) {
      setSelectedProperty(null)
      return
    }

    const property = properties.find((item) => {
      const matchesType = propertyType
        ? item.propertyType.toLowerCase() ===
          propertyType.toLowerCase()
        : true

      const matchesNumber = item.propertyNumber
        .toLowerCase()
        .includes(trimmedPropertyNumber.toLowerCase())

      return matchesType && matchesNumber
    })

    setSelectedProperty(property || null)
  }

  return (
    <div className='bg-[#ebf1de] border-b'>
      <NotificationBar/>
      <UpdatedHeader/>
      <SignupNavbar/>
  
      <Section 
      propertyType={propertyType}
      setPropertyType={setPropertyType}
      propertyNumber={propertyNumber}
      setPropertyNumber={setPropertyNumber}
      handleSearch={handleSearch}
      selectedProperty={selectedProperty}
      />
    </div>
  )
}

export default PropertyHistory
