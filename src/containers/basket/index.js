import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as R from 'ramda'
import {Link} from 'react-router-dom'

import {getBasketPhonesWithCount, getTotalBasketPrice} from 'selectors'
import {removePhoneFromBasket, cleanBasket, basketCheckout} from 'actions'

const Basket = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const phones = getBasketPhonesWithCount(state)
  const totalPrice = getTotalBasketPrice(state)
  const isBasketEmpty = R.isEmpty(phones)

  const renderSidebar = () => (
    <div>
      <Link className="btn btn-info" to="/">
        <span className="glyphicon glyphicon-info-sign"></span>
        <span>Continue shopping!</span>
      </Link>
      {R.not(isBasketEmpty) && (
        <div>
          <button
            onClick={() => cleanBasket(dispatch)}
            className="btn btn-danger"
          >
            <span className="glyphicon glyphicon-trash"></span>
            Clear cart
          </button>
          <button
            className="btn btn-success"
            onClick={() => basketCheckout(dispatch, phones)}
          >
            <span className="glyphicon glyphicon-envelop"></span>
            Checkout
          </button>
        </div>
      )}
    </div>
  )

  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div>Your shopping cart is empty</div>}
        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {phones.map((phone, i) => (
                <tr key={i} className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={phone.image}
                      alt={phone.name}
                    />
                  </td>
                  <td>{phone.name}</td>
                  <td>{phone.price}</td>
                  <td>{phone.count}</td>
                  <td>
                    <span
                      className="delete-cart"
                      onClick={() => removePhoneFromBasket(dispatch, phone.id)}
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!isBasketEmpty && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total</b>${totalPrice}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  )
}

export default Basket
