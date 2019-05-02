import React from 'react'
import MyRadios from './MyRadios'

const radiosLabelsArray = [
  'This is Value 0!',
  'only passing 2 strings!'
]

function Radios () {
  return (
    <div>
      <MyRadios
        radiosNumber={3}
        radiosLabels={radiosLabelsArray} />
    </div>
  )
}

export default Radios
