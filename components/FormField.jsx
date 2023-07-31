import React from 'react'

const FormField = ({
  labelName,
  type,
  name,
  value,
  placeholder,
  handleChange,
  handleSurpriseMe,
  isSurpriseMe,
}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border-2  border-black text-gray-900 text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-3/4 p-3 rounded-md'
      />
    </div>
  )
}

export default FormField
