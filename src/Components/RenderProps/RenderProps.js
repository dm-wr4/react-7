import React from 'react'
import ShowHideChildren from './ShowHideChildren'
import Toggle from './Toggle'
import '../style.css'

const RenderProps = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <ShowHideChildren>
        <div>Here are the children</div>
      </ShowHideChildren>
      <ShowHideChildren>
        <div>Now you see me</div>
      </ShowHideChildren>

      <Toggle
        render={(showContent, setShowContent) => {
          return (
            <div>
              {showContent && <p>Hello</p>}
              <button onClick={() => setShowContent(!showContent)}>
                Do yo thing
              </button>
            </div>
          )
        }}
      />
    </section>
  )
}
export default RenderProps
