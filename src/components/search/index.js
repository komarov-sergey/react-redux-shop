import React, {useState} from 'react'

const Search = () => {
  const [value, setValue] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    // searchPhone(value)
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
          <span className="input-group-btn">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Search
