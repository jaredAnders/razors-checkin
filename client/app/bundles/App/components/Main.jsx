import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getAppointmentData } from '../actions/actionCreators'

class Main extends Component {
  componentDidMount() {
    this.props.getAppointmentData()
  }

  render() {
    const listItems = _.sortBy(this.props.appointments, ['time', 'firstName']).map((name, i) => {
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

    return(
      <div className='container'>
        {/* <div className='arrows right'>
          <i className='material-icons'>
            keyboard_arrow_up
          </i>
          <i className='material-icons'>
            keyboard_arrow_down
          </i>
        </div>
        <br/> */}
        <ul className='collection scrollable-list'>
          {listItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ appointments: state.appointments })

const mapActionsToProps = {
  getAppointmentData
}

export default connect(mapStateToProps, mapActionsToProps)(Main)
