import React, { useState } from 'react';
import UpdatedHeader from '../Components/UpdatedHeader';
import NotificationBar from '../Components/NotificationBar';
import Navbar from '../Components/Navbar';
import MainBody from '../Component/ManageMember/MainBody';
import Footer from '../Component/Footer';

const ManagerMember = () => {

  // ================= MEMBERS =================
  const [members, setMembers] = useState([
    {
      id: 1,
      membershipNo: "M-100451",
      cnic: "12345-6792012-3",
      name: "Ali Khan",
      regDate: "2024-01-10",
      properties: 2,
      status: "Active",
    },
    {
      id: 2,
      membershipNo: "M-1034202",
      cnic: "987265-422328-7",
      name: "Sara Ahmed",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
     {
      id: 3,
      membershipNo: "M-310202",
      cnic: "987265-432298-7",
      name: "Sana",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
     {
      id: 4,
      membershipNo: "M-102002",
      cnic: "987265-409228-7",
      name: "Raza",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
     {
      id: 5,
      membershipNo: "M-102024",
      cnic: "987265-452409-7",
      name: "Ahmed",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
     {
      id: 6,
      membershipNo: "M-102042",
      cnic: "98726512-48998-7",
      name: "Arslan",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
     {
      id: 7,
      membershipNo: "M-1020412",
      cnic: "9265-432108-7",
      name: "Abubakr",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
     {
      id: 8,
      membershipNo: "M-5510202",
      cnic: "981265-4398-7",
      name: "Ibrahim",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
     {
      id: 9,
      membershipNo: "M-1054202",
      cnic: "965-42231098-7",
      name: "Abdullah",
      regDate: "2024-03-15",
      properties: 1,
      status: "Inactive",
    },
   
  ]);

  // ================= SEARCH =================
  const [searchKey, setSearchKey] = useState("membershipNo");
  const [searchValue, setSearchValue] = useState("");

  // ================= States For View Modal =================
  const[showModal , setShowModal] = useState(false);
  const[selectedMember , setSelectedMember] = useState(null)

  // ================= States For Edit Modal =================
  const[showEditModal , setShowEditModal] = useState(false)


  // ================= States For Delete Modal =================
  const [showDeleteModal , setShowDeleteModal] = useState(false)

  // ================= States For Add New Modal =================
  const [showAddModal , setShowAddModal] = useState(false);


  // State for Print Modal 
  const [showPrintModal , setShowPrintModal] = useState(false)
   

  // IMPORTANT: state-based filteredMembers (needed for button search)
  const [filteredMembers, setFilteredMembers] = useState(members);

  // ================= PAGINATION =================
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // ================= SEARCH BUTTON =================
  const handleSearch = () => {
    const result = members.filter((member) =>
      member[searchKey]
        .toString()
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase())
    );

    setFilteredMembers(result);
    setCurrentPage(1);
  };

  // ================= RESET =================
  const handleReset = () => {
    setSearchValue("");
    setFilteredMembers(members);
    setCurrentPage(1);
  };

  // ================= TOGGLE STATUS =================
  const toggleStatus = (id) => {
    const updatedMembers = members.map((member) => {
      if (member.id === id) {
        return {
          ...member,
          status:
            member.status === "Active"
              ? "Inactive"
              : "Active",
        };
      }
      return member;
    });

    setMembers(updatedMembers);

    // keep filtered list synced with current search
    const result = updatedMembers.filter((member) =>
      member[searchKey]
        .toString()
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );

    setFilteredMembers(result);
  };

  // ================= PAGINATION =================
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentData = filteredMembers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

    // ================= HandleView (OPEN MODAL)=================
    const handleView = (member)=> {
     
      setSelectedMember(member);
      setShowModal(true)
      
    }
  
    // ================= HandleEdit (Edit MODAL)=================
    const handleEdit =  (member) => {
       setSelectedMember(member);
       setShowEditModal(true)
    }

    // ================= HandleDelete (Delete MODAL)=================
    const handleDelete = (member)=> {
      setSelectedMember(member);
      setShowDeleteModal(true)

    }
    // ================= HandlePrint=================
    const handlePrint = (member) => {
      setSelectedMember(member)
      setShowPrintModal(true)

    }

      // ================= HandleAdd=================
      const handleAdd = (member) => {
       selectedMember(member);
       setShowAddModal(true)
      }

  // ================= UI =================
  return (
    <div className='bg-[#ebf1de]  min-h-screen border-b'>

      <NotificationBar />
      <UpdatedHeader />
      <Navbar />

      <MainBody
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
        currentPage={currentPage}
        members = {members}
        handleView = {handleView}
        showModal = {showModal}
        setShowModal = {setShowModal}
        selectedMember = {selectedMember}
        handleEdit = {handleEdit}
        showEditModal = {showEditModal}
        setShowEditModal = {setShowEditModal}
        handleEdit = {handleEdit}
        handleDelete = {handleDelete}
        setShowDeleteModal = {setShowDeleteModal}
        showDeleteModal = {showDeleteModal}
        handlePrint = {handlePrint}
        showPrintModal = {showPrintModal}
         setShowPrintModal={setShowPrintModal}
         handleAdd = {handleAdd}
         setShowAddModal = {setShowAddModal}
      />

      <Footer handleReset={handleReset} />
 

    </div>
  );
};

export default ManagerMember;