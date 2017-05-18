/* eslint-disable import/prefer-default-export */

import { GET_DATA } from './actionTypes'

const mockData = [
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

export const getAppointmentData = () => ({
  type: GET_DATA,
  payload: mockData,
})
