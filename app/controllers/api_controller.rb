class ApiController < ApplicationController
  def index
    mock_data = [
      {
        id: 0,
        first_name: 'Vito',
        last_name: 'Corleone',
        time: '2:45',
        checked_in: true
      },
      {
        id: 1,
        first_name: 'Sam',
        last_name: 'Rothstein',
        time: '3:45',
        checked_in: false
      },
      {
        id: 2,
        first_name: 'Henry',
        last_name: 'Hill',
        time: '3:15',
        checked_in: true
      },
      {
        id: 3,
        first_name: 'Tony',
        last_name: 'Soprano',
        time: '3:00',
        checked_in: false
      },
      {
        id: 4,
        first_name: 'Al',
        last_name: 'Capone',
        time: '4:30',
        checked_in: false
      },
      {
        id: 5,
        first_name: 'Lucky',
        last_name: 'Luciano',
        time: '3:30',
        checked_in: false
      },
      {
        id: 6,
        first_name: 'John',
        last_name: 'Gotti',
        time: '3:45',
        checked_in: false
      },
      {
        id: 7,
        first_name: 'Michael',
        last_name: 'Corleone',
        time: '3:00',
        checked_in: true
      }
    ]
    
    render json: mock_data
  end
end
