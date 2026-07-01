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
basic : "outline-none bg-[#9daf77] rounded-lg px-1 lg:px-2 py-1 text-xs lg:text-sm w-full sm:w-68 lg:w-80 no-spinner disabled:opacity-70",
Allott : "min-h-9 sm:min-h-10 outline-none bg-[#9daf77] rounded-lg px-3 py-1.5 text-[15px] sm:text-base w-full sm:w-80 disabled:opacity-70",
Search : "min-h-9 sm:min-h-10 outline-none bg-[#9daf77] rounded-lg px-3 py-1.5 text-[15px] sm:text-base w-full sm:mx-4 sm:w-64 disabled:opacity-70",
unit : "outline-none bg-[#9daf77] rounded-lg px-3 py-1 text-xs sm:text-base w-24 sm:w-36 disabled:opacity-70",
newStyle :"outline-none bg-[#9daf77] rounded-lg px-1 lg:px-2 py-1 text-xs sm:text-sm w-full sm:w-42 no-spinner disabled:opacity-70",
 email :"outline-none bg-[#9daf77] rounded-lg px-1 lg:px-2 py-1 text-xs lg:text-sm w-full sm:w-68 lg:w-160 no-spinner disabled:opacity-70",
short  :"outline-none bg-[#9daf77] rounded-lg px-1 lg:px-2 py-1 text-xs sm:text-sm w-full sm:w-42 no-spinner disabled:opacity-70"
}

const InputFeild = ({
    label,
    name,
    disabled = false,
    placeholder = "",
    type = "text",
    options = [],
    readOnly ,
    value,
    onChange,
    register,
    rules,
    errors,
    varient = "default",
    variant
}) => {
  const fieldVariant = variant || varient;
  const fieldClassName = inputStyles[fieldVariant];
  const registerProps = register ? register(name, rules) : {};

  return (
      <div className={wrapperStyles[fieldVariant]}>

      {label && (
        <label className={labelStyles[fieldVariant]}>
          {label}
        </label>
      )}
  <div>
      {type === "select" ? (
        <select
          className={fieldClassName}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...registerProps}
        >
          <option value="" disabled>
            {placeholder || "Select"}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={fieldClassName}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          disabled={disabled}
          {...registerProps}

        />
      )}


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
