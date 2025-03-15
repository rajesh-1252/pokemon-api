"use client"
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const error = ({ error }: any) => {
  return (
    <div className='flex justify-center items-center h-full'> <p>Can not find the pokemon you are looking for</p> </div>
  )
}

export default error
