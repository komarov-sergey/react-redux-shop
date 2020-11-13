import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import * as R from 'ramda'

const BasketCart = () => {
  const totalBasketCount = useSelector((state) => state.basket.length)
  const totalPrice = useSelector((state) => {
    return R.compose(
      R.sum,
      R.pluck('price'),
      R.map((id) => R.prop(id, state.phones))
    )(state.basket)
  })

  return (
    <div className="cart">
      <div className="dropdown">
        <Link
          to="/basket"
          id="dLabel"
          className="btn btn-inverse btn-block btn-lg"
        >
          <i className="fa fa-fa-shopping-cart"></i>
          <span>
            {totalBasketCount} item(s) - ${totalPrice}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BasketCart
