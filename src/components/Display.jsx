import React from 'react'

const Display = (props) => {
  return (
    <div className="bg-gray-800 p-4 rounded-t-md">
      <input
        className="w-full bg-gray-800 text-white text-right text-2xl font-bold focus:outline-none"
        type="text"
        placeholder="0"
        value={props.value}
        readOnly
      />
    </div>
  )
}

export default Display