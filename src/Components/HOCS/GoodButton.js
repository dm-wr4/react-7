import React from 'react'
import withStyles from './withStyles'

const GoodButton = (props) => {
  return (
    <button style={{ ...props.style }} {...props}>
      {props.text ? props.text : 'Good Little Button'}
    </button>
  )
}

export default withStyles(GoodButton)
