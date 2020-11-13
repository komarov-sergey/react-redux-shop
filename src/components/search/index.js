import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {searchPhone} from 'actions'

const Search = () => {
  const [value, setValue] = useState()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    searchPhone(dispatch, value)
  }

  const handleClick = () => {
    searchPhone(dispatch, value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="well blosd">
      <h3 className="lead">Quick shop</h3>
      <div className="input-group">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" className="form-control" />
        </form>
        <span className="input-group-btn" onClick={handleClick}>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>
  )
}

export default Search
