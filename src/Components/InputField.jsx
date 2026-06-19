const wrapperStyles = {
    basic : "flex w-full flex-col gap-1 sm:w-auto sm:flex-row sm:items-center sm:gap-0",
     Allott : "flex flex-col",
     Search : "flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:gap-0",
     unit : "flex"
 
}

const labelStyles = {
  basic : "font-semibold sm:w-42 sm:shrink-0",
  Allott :  "font-semibold w-42",
  Search  : "font-semibold",
  unit : ""

}

const inputStyles = {
basic : " outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-full sm:w-80",
Allott : "outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80",
Search : "outline-none bg-[#9daf77] rounded-lg px-2  py-1 text-sm w-full sm:mx-4 sm:w-64",
unit : "outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-24 sm:w-36"
}

const InputFeild = ({
    label,
    name,
    disabled = false,
    placeholder = "",
    type = "text",
    readOnly ,
    value,
    onChange,
    register,
    rules,
    errors,
    varient = "default"
}) => {
  return (
      <div className={wrapperStyles[varient]}>

      {label && (
        <label className={labelStyles[varient]}>
          {label}
        </label>
      )}
  <div>
      <input
        className={inputStyles[varient]}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        disabled={disabled}
        {...(register ? register(name, rules) : {})}

      />


       {/* Error Below Input */}
     
      {errors?.[name] && (
        <p className="text-red-500 text-sm ml-2">
          {errors[name].message}
        </p>
      )}
</div>
    </div>
  )
}

export default InputFeild
