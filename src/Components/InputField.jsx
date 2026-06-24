const wrapperStyles = {
    basic : "flex w-full flex-col gap-1 sm:w-auto sm:flex-row sm:items-center sm:gap-0 no-spinner",
     Allott : "flex flex-col",
     Search : "flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:gap-0",
     unit : "flex",
     newStyle: "flex w-full flex-col gap-1 sm:w-auto sm:flex-row sm:items-center sm:gap-0 no-spinner",
     email: "flex w-full flex-col gap-1 lg:w-auto lg:flex-row lg:items-center lg:gap-0 no-spinner",
     short:"flex w-full flex-col gap-1 sm:w-auto sm:flex-row sm:items-center sm:gap-2 no-spinner"
 
}

const labelStyles = {
  basic : "font-semibold sm:w-46 sm:shrink-0 no-spinner",
  Allott :  "font-semibold w-42",
  Search  : "font-semibold",
  unit : "",
  newStyle: "font-semibold w-4 sm:w-4 sm:shrink-0 no-spinner ",
  email:"font-semibold lg:w-46 lg:shrink-0 no-spinner",
  short:"font-semibold sm:w-16 sm:shrink-0 no-spinner"

}

const inputStyles = {
basic : " outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-full sm:w-80 no-spinner",
Allott : "outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80",
Search : "outline-none bg-[#9daf77] rounded-lg px-2  py-1 text-sm w-full sm:mx-4 sm:w-64",
unit : "outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-24 sm:w-36",
newStyle : "outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-36 sm:w-48 no-spinner",
 email :"outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-full lg:w-140 no-spinner",
short:"outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-full sm:w-42 no-spinner"
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
