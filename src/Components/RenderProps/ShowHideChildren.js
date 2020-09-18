import React, { useState } from 'react'
import withStyles from '../HOCS/withStyles'

const ShowHideChildren = (props) => {
  const [showChildren, setShowChildren] = useState(false)

  return (
    <div style={{ ...props.style }}>
      {showChildren && props.children}
      <button onClick={() => setShowChildren(!showChildren)}>Show/Hide</button>
    </div>
  )
}

export default withStyles(ShowHideChildren)
