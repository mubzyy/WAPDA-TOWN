import React from 'react'

const InputField = ({
  label,
  placeholder,
  type = 'text',
  className = 'flex flex-row gap-1 items-center',
  inputClass = 'border border-slate-300 rounded px-3 py-2',
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className={inputClass} />
    </div>
  )
}

export default InputField
