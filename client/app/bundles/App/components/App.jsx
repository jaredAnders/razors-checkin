import React from 'react'
import _ from 'lodash'

const testNames = [
  {
    firstName: 'Vito',
    lastName: 'Corleone',
    time: '3:00',
  },
  {
    firstName: 'Sam',
    lastName: 'Rothstein',
    time: '3:45',
  },
  {
    firstName: 'Henry',
    lastName: 'Hill',
    time: '3:15',
  },
  {
    firstName: 'Tony',
    lastName: 'Soprano',
    time: '3:00',
  },
  {
    firstName: 'Al',
    lastName: 'Capone',
    time: '4:00',
  },
  {
    firstName: 'Lucky',
    lastName: 'Luciano',
    time: '3:30',
  },
  {
    firstName: 'John',
    lastName: 'Gotti',
    time: '3:45',
  },
  {
    firstName: 'Michael',
    lastName: 'Corleone',
    time: '3:00',
  },
]

const listItems = _.sortBy(testNames, ['time', 'firstName']).map((name) => {
  return (
    <a className='collection-item'>
      <span className='left'>
        {name.firstName} {name.lastName}
      </span>
      <span className='right'>
        {name.time}
      </span>
    </a>
  )
})

const App = () => (
  <div className='container'>
    <ul className='collection scrollable-list'>
      {listItems}
    </ul>
  </div>
)

export default App
