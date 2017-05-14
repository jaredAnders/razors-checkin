import React from 'react'
import _ from 'lodash'

const testNames = [
  {
    firstName: 'Vito',
    lastName: 'Corleone',
    time: '2:45',
    checkedIn: true,
  },
  {
    firstName: 'Sam',
    lastName: 'Rothstein',
    time: '3:45',
    checkedIn: false,
  },
  {
    firstName: 'Henry',
    lastName: 'Hill',
    time: '3:15',
    checkedIn: true,
  },
  {
    firstName: 'Tony',
    lastName: 'Soprano',
    time: '3:00',
    checkedIn: false,
  },
  {
    firstName: 'Al',
    lastName: 'Capone',
    time: '4:30',
    checkedIn: false,
  },
  {
    firstName: 'Lucky',
    lastName: 'Luciano',
    time: '3:30',
    checkedIn: false,
  },
  {
    firstName: 'John',
    lastName: 'Gotti',
    time: '3:45',
    checkedIn: false,
  },
  {
    firstName: 'Michael',
    lastName: 'Corleone',
    time: '3:00',
    checkedIn: true,
  },
]

const listItems = _.sortBy(testNames, ['time', 'firstName']).map((name, i) => {
  return (
    <li className='collection-item'
      key={i.toString() + name.lastName.slice(0,1) + name.firstName.slice(0,1)}>
      <span className='left'>
        {`${name.firstName} ${name.lastName} - ${name.time}`}
      </span>
      <span className='right'>
        {name.checkedIn ?
          <i className='grey-text checked-in material-icons'>
            check
          </i> :
          <a className='btn waves-effect waves-light check-in-btn'>
            Check In
          </a>
        }
      </span>
    </li>
  )
})

const App = () => (
  <div className='container'>
    {/* <div className='center'> */}
      {/* <i className='material-icons grey-text'>
        keyboard_arrow_up
      </i> */}
    {/* </div> */}
    {/* <i className='material-icons scroll-arrow scroll-up'>
      keyboard_arrow_up
    </i>
    <br/> */}
    <div className='arrows right'>
      <i className='material-icons grey-text'>
        keyboard_arrow_up
      </i>
      {/* <br/> */}
      <i className='material-icons grey-text'>
        keyboard_arrow_down
      </i>
    </div>
    <br/>
    <ul className='collection scrollable-list'>
      {listItems}
    </ul>
    {/* <i className='material-icons scroll-arrow scroll-down'>
      keyboard_arrow_down
    </i> */}
  </div>
)

export default App
