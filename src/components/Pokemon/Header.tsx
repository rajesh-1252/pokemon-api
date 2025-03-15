import React from 'react'

interface HeaderProps {
  pokemon: Record<string, string>
  id: string
}

const Header = ({ pokemon, id }: HeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white relative overflow-hidden">
      <div className="relative z-10">
        <span className="text-white/80 font-bold">#{id.padStart(3, '0')}</span>
        <h1 className="text-4xl font-extrabold capitalize">{pokemon.name}</h1>
      </div>
    </div>
  )
}

export default Header
