import React from 'react'
import PropTypes from 'prop-types'

const App = ({ name, updateName }) => (
  <div>
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
    <hr />
    <h3>
      Hello, {name}!
    </h3>
  </div>
)

App.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
}

export default App
