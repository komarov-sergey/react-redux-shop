import React, {Component, useEffect} from 'react'
import {connect, useDispatch, useStore, useSelector} from 'react-redux'
import * as R from 'ramda'
import {Link} from 'react-router-dom'

import {fetchPhones, loadMorePhones} from 'actions'
import {getPhones} from 'selectors'
import Layout from 'containers/layout'

const Phones = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const phonesPageIds = useSelector((state) => state.phonesPage.ids.length)
  const phonesData = useSelector((state) => state.phones)

  useEffect(() => {
    fetchPhones(dispatch)
  }, [])

  const loadMoreClick = () => {
    loadMorePhones(dispatch, phonesPageIds)
  }

  const renderPhone = (phone, index) => {
    const shortDescription = `${R.take(60, phone.description)}...`

    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={phone.image} alt={phone.name} />
        </div>
        <div className="caption">
          <h4 className="pull-right">{phone.price}</h4>
          <h4>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </h4>
          <p>{shortDescription}</p>
          <p className="itemButton">
            <button className="btn btn-primary">Buy Now!</button>
            <Link className="btn btn-default" to={`/phones/${phone.id}`}>
              More info
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="books row">
        {Object.keys(phonesData).length > 0 &&
          getPhones(state).map((phone, index) => renderPhone(phone, index))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={loadMoreClick}
            className="pull-right btn btn-primary"
          >
            Load More
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Phones
