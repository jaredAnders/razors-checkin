/* eslint-disable import/prefer-default-export */

import { GET_DATA, CHECK_IN } from './actionTypes'
import { mockData } from './mockData'

export const getAppointmentData = () => ({
  type: GET_DATA,
  payload: mockData,
})

export const updateCheckedIn = (id) => ({
  type: CHECK_IN,
  id
})
