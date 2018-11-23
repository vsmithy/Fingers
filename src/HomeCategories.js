import React from 'react'

const HomeCategories = (props) => (
  <ul>
    <li><button disabled className="button-disabled">HTML</button></li>
    <li><button disabled  className="button-disabled">CSS</button></li>
    <li><button onClick={() => props.handler('JsCategories')} className="js">JS</button></li>
    <li><button disabled className="button-disabled">Python</button></li>
  </ul>
)

export default HomeCategories