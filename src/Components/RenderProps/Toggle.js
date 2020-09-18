import { useState } from 'react'

const Toggle = (props) => {
  const [showContent, setShowContent] = useState(false)
  return props.render(showContent, setShowContent)
}

export default Toggle
