import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as R from 'ramda'
import {Link} from 'react-router-dom'

import {fetchPhoneByIdAction} from 'reducers/phonePageSlice'
import {addPhoneToBasket} from 'reducers/basketSlice'

import BasketCart from 'components/basketCart'

const Phone = ({match}) => {
  const dispatch = useDispatch()
  const phoneId = match.params.id
  const phone = useSelector((state) => state.phones[phoneId])

  useEffect(() => {
    fetchPhoneByIdAction(dispatch, match.params.id)
  }, [])

  const renderField = () => {
    const columnField = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory',
      ])
    )(phone)

    return columnField.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">{value}</div>
      </div>
    ))
  }

  const renderContent = () => {
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6">{renderField()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    )
  }

  const renderSidebar = () => {
    return (
      <div>
        <p className="lead">Quick shop</p>
        <BasketCart />
        <div className="form-group">
          <h1>{phone.name}</h1>
          <h2>{phone.price}</h2>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Back to store
        </Link>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={() => {
            dispatch(addPhoneToBasket(phone.id))
          }}
        >
          Add to cart
        </button>
      </div>
    )
  }

  console.log(phone)

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{phone && renderContent()}</div>
          <div className="col-md-3">{phone && renderSidebar()}</div>
        </div>
      </div>
    </div>
  )
}

export default Phone
