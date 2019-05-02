import React from 'react'
import List from './List'

const styledDiv = {
  display: 'flex',
  'justifyContent': 'space-around'
}

const Lists = () => {
  return (
    <div
      style={styledDiv}>

      <List
        items={['Ryu', 'Ken', 'Chun Li', 'Guile', 'Blanka']} />

      <List
        items={['nol bullet 1', 'no bullet 2', 'no bullet 3']}
        hideBullets />

      <List
        items={['un', 'deux', 'trois', 'quatre', 'cinq', 'six']}
        isOrdered />

      <List
        items={['Asterix', 'Obelix', 'Idefix', 'Panoramix', 'Assurancetourix', 'Abraracourcix', 'Agecanonix', 'Cétautomatix', 'Ordralfabétix', 'Numérobis']}
        isRoman />
    </div>
  )
}

export default Lists
