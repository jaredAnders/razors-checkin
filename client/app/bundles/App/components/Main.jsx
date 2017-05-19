import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getAppointmentData, updateCheckedIn } from '../actions/actionCreators'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAppointmentData()
  }

  render() {
    const listItems = _.sortBy(this.props.appointments, ['time', 'firstName']).map((appointment, i) => {
      return (
        <li className='collection-item'
          key={i.toString() + appointment.lastName.slice(0,1) + appointment.firstName.slice(0,1)}>
          <span className='left'>
            {`${appointment.firstName} ${appointment.lastName} - ${appointment.time}`}
          </span>
          <span className='right'>
            {appointment.checkedIn ?
              <i className='grey-text checked-in material-icons'>
                check
              </i> :
              <a className='btn waves-effect waves-light check-in-btn'
                id={appointment.id}
                onClick={() => this.props.updateCheckedIn(appointment.id)}>
                Check In
              </a>
            }
          </span>
        </li>
      )
    })

    return(
      <div className='container'>
        <ul className='collection scrollable-list'>
          {listItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ appointments: state.appointments })

const mapActionsToProps = {
  getAppointmentData,
  updateCheckedIn,
}

export default connect(mapStateToProps, mapActionsToProps)(Main)
