import React from 'react'

export const Form = () => {
  const [value, setValue] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value);
  }
  return (
    <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
      <input type='text' className='outline-non bg-transparent border-gray-500 p-4 w-[300px]
       text-white mb-8 rounded placeholder:text-gray-300'
       placeholder='What taks do you have today?' onChange={(e) => setValue(e.target.value)}/>
       <button className='bg-gray-700 border-none p-2 text-white
        cursor-pointer rounded ml-2'>
          Add Task
        </button>
    </form>
  )
}
