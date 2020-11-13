import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as R from 'ramda'
import {Link, useLocation} from 'react-router-dom'
import cl from 'classnames'

const Categories = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const allCategories = useSelector((state) => R.values(state.categories))
  const activeCategoriesId = R.last(location.pathname)

  const renderCategory = (category, i) => {
    const getActiveState = (category) => {
      return activeCategoriesId === category.id
    }

    const linkClass = cl({
      'list-group-item': true,
      active: getActiveState(category),
    })
    return (
      <Link to={`/categories/${category.id}`} className={linkClass} key={i}>
        {category.name}
      </Link>
    )
  }

  const renderAllCategory = () => {
    const checkActiveState = () => {
      return R.isNil(activeCategoriesId) || activeCategoriesId === '/'
    }

    const linkClass = cl({
      'list-group-item': true,
      active: checkActiveState(),
    })

    return (
      <Link to="/" className={linkClass}>
        All
      </Link>
    )
  }

  return (
    <div className="well">
      <h4>Brand</h4>
      <div className="list-group">
        {renderAllCategory()}
        {allCategories.map((category, i) => renderCategory(category, i))}
      </div>
    </div>
  )
}

export default Categories
