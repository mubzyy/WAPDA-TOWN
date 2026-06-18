const wrapperStyles = {
    basic : "flex",
     Allott : "flex flex-col",
     Search : "flex",
     unit : "flex   ",
     new : "flex flex-col sm:flex-row sm:items-start gap-2"
 
}

const labelStyles = {
  basic : "font-semibold w-42 lg:text-base text-xs",
  Allott :  "font-semibold w-42",
  Search  : "font-semibold text-xs lg:text-base w-34 lg:w-auto ",
  unit : "w-42",
  new : "flex flex-col gap-2 w-full"

}

const inputStyles = {
basic : " outline-none bg-[#9daf77] rounded-lg px-1 lg:px-2 py-1 text-xs lg:text-sm w-44 lg:w-80",
Allott : "outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80",
Search : "mx-4 outline-none bg-[#9daf77]  rounded-2xl lg:rounded-lg px-2  py-1 text-xs lg:text-sm w-40 lg:w-64",
unit : "  outline-none bg-[#9daf77] rounded-lg   py-0.5  px-2 py-1 text-xs lg:text-sm w-32 ",
new : "w-full sm:w-40"
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
        <p className="text-red-500  text-xs lg:text-sm ml-2">
          {errors[name].message}
        </p>
      )}
</div>
    </div>
  )
}

export default InputFeild
