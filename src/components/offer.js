import React from 'react'

import PropTypes from 'prop-types'

import './offer.css'

const Offer = (props) => {
  return (
    <div className="offer-offer">
      <img alt="image" src={props.Image} className="offer-image" />
      <div className="offer-content">
        <div className="offer-details">
          <span className="offer-text">{props.Location}</span>
          <span className="offer-text1">{props.Guides}</span>
        </div>
        <span className="offer-text2">{props.Description}</span>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  Image: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
  Guides: '3 Local guides',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Location: 'Crete, Greece',
}

Offer.propTypes = {
  Image: PropTypes.string,
  Guides: PropTypes.string,
  Description: PropTypes.string,
  Location: PropTypes.string,
}

export default Offer
