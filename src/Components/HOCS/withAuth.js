import React, { useState, useEffect } from 'react'

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [showComponent, setShowComponent] = useState(false)

    useEffect(() => {
      if (props.isLoggedIn) {
        setShowComponent(true)
      } else {
        setShowComponent(false)
      }
    }, [props.isLoggedIn])

    return showComponent ? (
      <WrappedComponent {...props} />
    ) : (
      <div>YOU CAN'T SEE THIS. TRY AGAIN</div>
    )
  }
}

export default withAuth
