const wrapperStyles = {
    basic : "flex lg:flex-row flex-col ",
     Allott : "flex flex-col",
     Search : "flex",
     unit : "flex   ",
     new : "flex flex-col sm:flex-row sm:items-start gap-2",
     modern: "relative w-full "
 
}

const labelStyles = {
  basic : "font-semibold w-42 lg:text-base text-xs",
  Allott :  "font-semibold w-42",
  Search  : "font-semibold text-xs lg:text-base w-32  xl:w-auto ",
  unit : "w-42",
  new : "flex flex-col gap-2 w-full",
  modern: " absolute left-3 top-1 bg-[#ebf1de] text-gray-500 transition-all duration-200 peer-focus:  -top-8 peer-focus: text-xs peer-focus: bg-white  peer-placeholder-shown: top-10 peer-placeholder-shown: text-xs "

}

const inputStyles = {
basic : " outline-none bg-[#9daf77] rounded-lg px-1 lg:px-2 py-1 text-xs lg:text-sm w-68 lg:w-80",
Allott : "outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80",
Search : "mx-4 outline-none bg-[#9daf77]  rounded-2xl lg:rounded-lg px-2  py-1 text-xs lg:text-sm w-40 lg:w-64",
unit : "  outline-none bg-[#9daf77] rounded-lg   py-0.5  px-2 py-1 text-xs lg:text-sm w-32 ",
new : "w-full sm:w-40",

modern : "peer w-full border-2 border-green-900 rounded-lg px-3 pt-5 pb-2 outline-none focus:border-green-700"
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
