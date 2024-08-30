import React, { useState } from 'react'

const InputFilter = () => {
  const fruits = [
    'Apple',
    'Apricot',
    'Banana',
    'Blueberry',
    'Cherry',
    'Cranberry',
    'Date',
    'Dragonfruit',
    'Elderberry',
    'Fig',
    'Grape',
    'Grapefruit',
  ]

  const [fruitsData, setFruitsData] = useState(fruits)
  const [searchTerm, setSearchTerm] = useState('')

  // BOLDOVANJE TEXTA U SEARCHU
  //'gi'
  // g flag označava globalno pretraživanje, što znači da će se traženi termin pretražiti kroz ceo string, a ne samo do prve pojave.
  // i flag označava da je pretraga neosetljiva na velika i mala slova (case-insensitive).

  const getBoldedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    )
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }

  const filteredFruitData = fruitsData.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2rem',
        gap: '2rem',
      }}
    >
      <input
        style={{ width: '20%', padding: '10px 5px' }}
        type="text"
        placeholder='"Search here...'
        onChange={handleInputChange}
      />

      {filteredFruitData.map((fruit) => {
        return <div key={fruit}>{getBoldedText(fruit, searchTerm)}</div>
      })}
    </div>
  )
}

export default InputFilter
