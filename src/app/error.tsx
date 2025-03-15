"use client"
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const error = ({ error }: any) => {
  return (
    <div className='flex justify-center items-center h-full'> <p>Not able to fetch the pokemon please try again later</p> </div>
  )
}

export default error
