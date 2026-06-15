import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const AddNewModal = ({selectedMember , setShowAddModal}) => {
    const {
        register,
        handleSubmit,
        formState = {errors}
    } = useForm({
        mode : "all"
    })
  return (
    <div className=''>
        {/* FORM */}
        <form > 
      

        </form>
      
    </div>
  )
}

export default AddNewModal
